## 📘 Bölüm: Fullstack WASM Uygulamaları
### 🔹 Kategori: WASM Derleme ve Bağımlılıklar
#### ✅ Cevap 1282: `wasm-bindgen` ve `wasm-pack` kullanımı

Bu soruda, Rust kodunu WebAssembly'ye derlemek ve JavaScript ile etkileşim sağlamak için `wasm-bindgen` ve `wasm-pack` kullanılır. `wasm-bindgen` Rust fonksiyonlarını JS'ye açar, `wasm-pack` ise derleme ve paketleme işlemini kolaylaştırır.

```rust
// Cargo.toml'da:
// [dependencies]
// wasm-bindgen = "*"

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet() -> String {
    "Hello from Rust!".to_string()
}
```
// wasm-pack ile derleyin ve JS'de çağırın:
// import * as wasm from './pkg';
// alert(wasm.greet());
