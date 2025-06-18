## 📘 Bölüm: WASM Performansı ve Hata Ayıklama
### 🔹 Kategori: WASM Hata Ayıklama
#### ✅ Cevap 1376: WASM'de Rust paniklerini hata ayıklama

Rust ile WASM'de panikler varsayılan olarak sessizce başarısız olabilir. Panik mesajlarını tarayıcı konsolunda görebilmek için `console_error_panic_hook` crate'ini kullanabilirsiniz.

```rust
// Cargo.toml'da:
// console_error_panic_hook = "0.1"

use console_error_panic_hook;
use std::panic;

#[wasm_bindgen(start)]
pub fn main() {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
}
```

Bu sayede panik mesajları tarayıcı konsolunda görünür ve hata ayıklama kolaylaşır.
