## 📘 Bölüm: WebAssembly ve Leptos/Yew ile Frontend
### 🔹 Kategori: Statik Hosting ve WASM Entegrasyonu
#### ✅ Cevap 539: Statik hosting'de WebAssembly çıktısı entegre etme

Rust ile derlenen WASM çıktısı genellikle `pkg/` veya `dist/` klasöründe olur. Statik bir web sitesinde entegrasyon için:

- WASM dosyasını ve JS glue kodunu sunucuya yükleyin.
- HTML dosyanızda ilgili JS dosyasını `<script type="module">` ile çağırın.
- JS, WASM modülünü yükler ve başlatır.

Örnek HTML:

```html
<script type="module">
  import init from './pkg/my_wasm_app.js';
  init();
</script>
```
