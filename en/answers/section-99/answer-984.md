## 📘 Section: Language Interoperability  
### 🔹 Category: Interfacing with WebAssembly Modules  
#### ✅ Answer 984: Interfacing with WebAssembly modules

To compile Rust code to WASM and call it from JavaScript:

Rust side:
```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

In the terminal:
```
cargo install wasm-pack
wasm-pack build --target web
```

JavaScript side:
```js
import init, { greet } from './pkg/your_crate.js';
await init();
console.log(greet('Rust'));
```
You can load the WASM module and call the function from JS.
