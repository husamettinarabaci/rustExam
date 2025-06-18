## 📘 Bölüm: Fullstack WASM Uygulamaları
### 🔹 Kategori: JS ve DOM ile Etkileşim
#### ✅ Cevap 1283: JavaScript ve DOM API'leriyle arayüz oluşturma

Bu soruda, Rust WASM modülünden JavaScript ve DOM API'leriyle etkileşim sağlanır. `web-sys` ile DOM üzerinde değişiklik yapılabilir ve fonksiyonlar hem JS'den çağrılabilir hem de Rust tarafından DOM manipülasyonu yapılabilir.

```rust
use wasm_bindgen::prelude::*;
use web_sys::Document;

#[wasm_bindgen]
pub fn change_title(new_title: &str) {
    let window = web_sys::window().unwrap();
    let document: Document = window.document().unwrap();
    document.set_title(new_title);
}
```
// JS'den çağırmak için:
// wasm.change_title("WASM Başlık!");
