## 📘 Bölüm: Fullstack WASM Uygulamaları
### 🔹 Kategori: WASM Hata Ayıklama
#### ✅ Cevap 1287: WASM uygulamalarını hata ayıklama

Bu soruda, Rust WASM uygulamalarında hata ayıklama için debug sembolleri, kaynak haritaları ve panik yönetimi kullanılır. `console_error_panic_hook` ile panikler JS konsoluna yönlendirilir.

```rust
// Cargo.toml'da:
// [dependencies]
// console_error_panic_hook = "*"

use std::panic;

pub fn set_panic_hook() {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
}

// main fonksiyonunda çağırın:
// set_panic_hook();
```
// Derlerken debug sembolleri için:
// wasm-pack build --dev
