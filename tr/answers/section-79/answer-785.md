## 📘 Bölüm: WebAssembly İleri Konular  
### 🔹 Kategori: WASM Performansı ve Hata Ayıklama  
#### ✅ Cevap 785: wasm-bindgen ile tarayıcı API'leri yönetimi

`wasm-bindgen`, Rust kodunun tarayıcı API'leriyle etkileşimini sağlar. DOM manipülasyonu, event dinleme gibi işlemler için Rust fonksiyonları JavaScript'e bağlanır. `web-sys` ve `js-sys` crate'leriyle birlikte kullanılır.

```rust
use wasm_bindgen::prelude::*;
use web_sys::window;

#[wasm_bindgen]
pub fn alert_hello() {
    window().unwrap().alert_with_message("Hello from Rust!").unwrap();
}
```
