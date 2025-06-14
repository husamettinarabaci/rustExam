## 📘 Section: Rust and WebAssembly (WASM)  
### 🔹 Category: WASM Tooling  
#### ✅ Answer 212: Using wasm-bindgen in Rust projects

The `wasm-bindgen` crate enables communication between Rust and JavaScript. It allows Rust functions to be called from JS and vice versa.

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet() {
    web_sys::console::log_1(&"Hello from Rust!".into());
}
```
