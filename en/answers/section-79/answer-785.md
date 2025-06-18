## 📘 Section: Advanced WebAssembly Topics  
### 🔹 Category: WASM Performance and Debugging  
#### ✅ Answer 785: Handling browser APIs with wasm-bindgen

`wasm-bindgen` allows Rust code to interact with browser APIs. For DOM manipulation or event handling, Rust functions are exposed to JavaScript. Use the `web-sys` and `js-sys` crates for access to browser features.

```rust
use wasm_bindgen::prelude::*;
use web_sys::window;

#[wasm_bindgen]
pub fn alert_hello() {
    window().unwrap().alert_with_message("Hello from Rust!").unwrap();
}
```
