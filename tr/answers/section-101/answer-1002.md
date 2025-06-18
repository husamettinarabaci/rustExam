## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: Görev Yürütücüleri ve Zamanlayıcıları  
#### ✅ Cevap 1002: Görev yürütücüleri ve zamanlayıcıları anlama

Async görev yürütücüleri (executor), async fonksiyonlardan dönen future'ları çalıştıran altyapıdır. Görev zamanlayıcıları ise bu future'ların ne zaman çalıştırılacağını ve hangi sırayla yürütüleceğini belirler. Yürütücü, görevleri poll ederek ilerletir; zamanlayıcı ise görevlerin adil ve verimli şekilde çalışmasını sağlar. Yürütücü, görevlerin çalıştırılmasından; zamanlayıcı ise görevlerin sıralanmasından sorumludur.
