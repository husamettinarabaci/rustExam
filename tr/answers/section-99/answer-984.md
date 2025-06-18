## 📘 Bölüm: Dil Arası Çalışabilirlik  
### 🔹 Kategori: WebAssembly Modülleriyle Arayüz  
#### ✅ Cevap 984: WebAssembly modülleriyle arayüz oluşturma

Rust kodunu WASM olarak derleyip JavaScript'ten çağırmak için:

Rust tarafı:
```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

Terminalde:
```
cargo install wasm-pack
wasm-pack build --target web
```

JavaScript tarafı:
```js
import init, { greet } from './pkg/your_crate.js';
await init();
console.log(greet('Rust'));
```
WASM modülünü JS ile yükleyip fonksiyonu çağırabilirsiniz.
