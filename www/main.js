function setSearchPlaceholder() {
  const searchBox = document.getElementById('search-box');
  if (searchBox) {
    searchBox.placeholder = lang === 'tr' ? 'Bölüm veya soru başlığı ara...' : 'Search section or question...';
  }
}
const LANGS = { en: 'en', tr: 'tr' };
let lang = localStorage.getItem('rustexam-lang') || LANGS.en;
if (![LANGS.en, LANGS.tr].includes(lang)) lang = LANGS.en;
document.documentElement.lang = lang;
const main = document.getElementById('main');
document.getElementById('lang-en').onclick = () => { switchLang(LANGS.en); };
document.getElementById('lang-tr').onclick = () => { switchLang(LANGS.tr); };
function switchLang(l) {
  lang = l;
  localStorage.setItem('rustexam-lang', lang);
  document.documentElement.lang = lang;
  setSearchPlaceholder();
  loadQuestions();
}
async function fetchText(path) {
  const resp = await fetch(path);
  if (!resp.ok) throw new Error('Failed to load ' + path);
  return await resp.text();
}
function parseQuestionsMD(md) {
  // Yeni format: başlıklar ## ile, sorular başında ✅ veya ❌ ile başlıyor
  const lines = md.split(/\r?\n/);
  const sections = [];
  let current = null;
  let sectionNumber = 0;
  for (let line of lines) {
    const sectionMatch = line.match(/^##\s+(\d+)\.\s+(.+)$/);
    if (sectionMatch) {
      if (current) sections.push(current);
      sectionNumber = parseInt(sectionMatch[1], 10);
      current = {
        number: sectionNumber,
        title: sectionMatch[2],
        questions: []
      };
      continue;
    }
    // Soru satırı: başında ✅ veya ❌ olabilir, ardından numara ve metin
    const questionMatch = line.match(/^[✅❌]\s*(\d+)\.\s+(.+)$/);
    if (questionMatch && current) {
      current.questions.push({
        num: questionMatch[1],
        title: questionMatch[2]
      });
    }
  }
  if (current) sections.push(current);
  return sections.filter(s => s && s.questions && s.questions.length > 0);
}
async function loadQuestions() {
  main.innerHTML = '<div style="text-align:center; margin-top:2em; color:#888;">Loading questions...</div>';
  try {
    const qmd = await fetchText(`${lang}/QUESTIONS.md`);
    const sections = parseQuestionsMD(qmd);
    if (!sections || !Array.isArray(sections) || !sections.length) throw new Error('No questions found.');
    renderSections(sections);
  } catch (e) {
    main.innerHTML = `<div style='color:red;text-align:center;margin-top:2em;'>Failed to load questions.<br>${e.message}</div>`;
  }
}
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
document.getElementById('modal-close').onclick = closeModal;
modal.onclick = (e) => { if (e.target === modal) closeModal(); };
function openModal(html) {
  modalBody.innerHTML = html;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.style.display = 'none';
  modalBody.innerHTML = '';
  document.body.style.overflow = '';
}
async function openQuestionModal(secNum, globalQNum, sectionTitle, qTitle) {
  try {
    const qnumStr = String(globalQNum).padStart(2, '0');
    const qpath = `${lang}/questions/section-${secNum}/question-${qnumStr}.md`;
    const qmd = await fetchText(qpath).catch(e => null);
    let html = '';
    if (qmd) {
      html += `<div class='question-content'>${window.marked.parse(qmd)}</div>`;
    } else {
      html += `<div style='color:red;'>${lang==='tr'?'Soru yüklenemedi':'Failed to load question'}.</div>`;
    }
    openModal(html);
  } catch (e) {
    openModal(`<div style='color:red;'>${lang==='tr'?'Soru yüklenemedi':'Failed to load question'}.<br>${e.message}</div>`);
  }
}
async function openAnswerModal(secNum, globalQNum) {
  try {
    const qnumStr = String(globalQNum).padStart(2, '0');
    const apath = `${lang}/answers/section-${secNum}/answer-${qnumStr}.md`;
    const amd = await fetchText(apath).catch(e => null);
    let html = '';
    if (amd) {
      html += `<div class='answer-content'>${window.marked.parse(amd)}</div>`;
    } else {
      html += `<div style='color:red;'>${lang==='tr'?'Cevap yüklenemedi':'Failed to load answer'}.</div>`;
    }
    openModal(html);
  } catch (e) {
    openModal(`<div style='color:red;'>${lang==='tr'?'Cevap yüklenemedi':'Failed to load answer'}.<br>${e.message}</div>`);
  }
}
function getProgressKey() { return `rustexam-progress-v2`; }
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(getProgressKey()) || '{}');
  } catch { return {}; }
}
function setProgress(progress) {
  localStorage.setItem(getProgressKey(), JSON.stringify(progress));
}
function markSolved(sectionNum, qnum) {
  const progress = getProgress();
  if (!progress[sectionNum]) progress[sectionNum] = {};
  progress[sectionNum][qnum] = true;
  setProgress(progress);
  updateProgressBar();
}
function unmarkSolved(sectionNum, qnum) {
  const progress = getProgress();
  if (progress[sectionNum]) delete progress[sectionNum][qnum];
  setProgress(progress);
  updateProgressBar();
}
function isSolved(sectionNum, qnum) {
  const progress = getProgress();
  return !!(progress[sectionNum] && progress[sectionNum][qnum]);
}
function countTotalQuestions(sections) {
  return sections.reduce((sum, s) => sum + (s.questions?.length || 0), 0);
}
function countSolvedQuestions(progress) {
  let count = 0;
  for (const sec in progress) for (const q in progress[sec]) if (progress[sec][q]) count++;
  return count;
}
function updateProgressBar() {
  if (!window._sectionsForProgress) return;
  const total = countTotalQuestions(window._sectionsForProgress);
  const solved = countSolvedQuestions(getProgress());
  const percent = total ? Math.round((solved/total)*100) : 0;
  const bar = document.getElementById('progress-bar');
  bar.style.width = percent+'%';
  bar.textContent = '';
}
document.addEventListener('DOMContentLoaded',()=>{
  setSearchPlaceholder();
  document.getElementById('progress-reset').onclick = () => {
    showResetConfirm();
  };
  const searchBox = document.getElementById('search-box');
  if (searchBox) {
    searchBox.oninput = (e) => {
      renderSections(window._sectionsForProgress||[], searchBox.value);
    };
  }
});
function showResetConfirm() {
  const old = document.getElementById('reset-confirm-dialog');
  if (old) old.remove();
  const dialog = document.createElement('div');
  dialog.id = 'reset-confirm-dialog';
  dialog.style.position = 'fixed';
  dialog.style.top = '0';
  dialog.style.left = '0';
  dialog.style.width = '100vw';
  dialog.style.height = '100vh';
  dialog.style.background = 'rgba(30,32,44,0.18)';
  dialog.style.display = 'flex';
  dialog.style.alignItems = 'center';
  dialog.style.justifyContent = 'center';
  dialog.style.zIndex = '2000';
  dialog.innerHTML = `
    <div style="max-width:340px;width:92vw;background:#fff;border-radius:14px;box-shadow:0 6px 32px rgba(30,32,44,0.18);padding:2.1em 1.2em 1.3em 1.2em;position:relative;text-align:center;">
      <div style="font-size:1.15em;font-weight:600;margin-bottom:1.1em;color:#b08900;">${lang==='tr'?'İlerlemeyi Sıfırla?':'Reset Progress?'}</div>
      <div style="color:#444;font-size:1em;margin-bottom:1.5em;">${lang==='tr'?'Tüm işaretli sorular ve ilerleme kaydınız silinecek. Emin misiniz?':'All checked questions and your progress will be cleared. Are you sure?'}</div>
      <button id="reset-confirm-btn" style="background:#fbbf24;color:#1a202c;font-weight:600;border:none;border-radius:8px;padding:0.6em 1.5em;font-size:1em;cursor:pointer;margin-right:0.7em;">${lang==='tr'?'Evet':'Yes'}</button>
      <button id="reset-cancel-btn" style="background:#e5e7eb;color:#444;font-weight:500;border:none;border-radius:8px;padding:0.6em 1.5em;font-size:1em;cursor:pointer;">${lang==='tr'?'Vazgeç':'Cancel'}</button>
    </div>
  `;
  document.body.appendChild(dialog);
  document.getElementById('reset-confirm-btn').onclick = () => {
    setProgress({});
    renderSections(window._sectionsForProgress||[]);
    updateProgressBar();
    dialog.remove();
  };
  document.getElementById('reset-cancel-btn').onclick = () => {
    dialog.remove();
  };
}
let openSectionIdx = 0;
let lastSections = [];
let lastSearch = '';
function renderSections(sections, searchTerm = '') {
  main.innerHTML = '';
  window._sectionsForProgress = sections;
  updateProgressBar();
  lastSections = sections;
  lastSearch = searchTerm;
  const search = searchTerm.trim().toLowerCase();
  sections.forEach((section, idx) => {
    const secNum = (idx+1).toString().padStart(2, '0');
    let filteredQuestions = section.questions.filter(q => {
      if (!isSolved(secNum, q.num)) {
        if (!search) return true;
        return section.title.toLowerCase().includes(search) || q.title.toLowerCase().includes(search);
      }
      return false;
    });
    if (filteredQuestions.length === 0) return;
    const secDiv = document.createElement('section');
    secDiv.className = 'section' + (idx === openSectionIdx ? ' open' : '');
    const secTitle = document.createElement('div');
    secTitle.className = 'section-title';
    secTitle.textContent = section.title;
    secTitle.tabIndex = 0;
    secTitle.onclick = () => {
      if (openSectionIdx === idx) return;
      openSectionIdx = idx;
      renderSections(window._sectionsForProgress, lastSearch);
    };
    secTitle.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') secTitle.click(); };
    secDiv.appendChild(secTitle);
    if (secDiv.classList.contains('open')) {
      const grid = document.createElement('div');
      grid.className = 'questions-grid';
      filteredQuestions.forEach((q, qidx) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.tabIndex = 0;
        card.innerHTML = `<b>#${q.num}</b><div style='font-size:0.98em;margin-top:0.3em;'>${q.title}</div>`;
        const checkBtn = document.createElement('button');
        checkBtn.className = 'question-check';
        checkBtn.title = lang==='tr'?'Çözüldü olarak işaretle':'Mark as solved';
        checkBtn.innerHTML = `<svg viewBox="0 0 20 20"><polyline points="5,11 9,15 15,7" fill="none" stroke="#b08900" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        checkBtn.onclick = (e) => {
          e.stopPropagation();
          checkBtn.classList.add('checked');
          setTimeout(()=>{
            card.classList.add('solved');
            setTimeout(()=>{
              markSolved(secNum, q.num);
              renderSections(window._sectionsForProgress||[], lastSearch);
            }, 350);
          }, 120);
        };
        card.appendChild(checkBtn);
        const hintBtn = document.createElement('button');
        hintBtn.className = 'hint-btn';
        hintBtn.title = lang==='tr'?'Cevabı Gör':'Show Answer';
        hintBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 20 20" style="display:block;"><circle cx="10" cy="10" r="9" fill="#ffe082" stroke="#b08900" stroke-width="1.5"/><text x="10" y="15" text-anchor="middle" font-size="13" font-family="Arial" fill="#b08900">?</text></svg>`;
        hintBtn.onclick = (e) => {
          e.stopPropagation();
          openAnswerModal(secNum, q.num);
        };
        card.appendChild(hintBtn);
        card.onclick = () => openQuestionModal(secNum, q.num, section.title, q.title);
        card.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') card.click(); };
        grid.appendChild(card);
      });
      secDiv.appendChild(grid);
    }
    main.appendChild(secDiv);
  });
}
(function loadMarked() {
  if (window.marked) {
    loadQuestions();
    return;
  }
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
  s.onload = loadQuestions;
  document.body.appendChild(s);
})();
