## 📘 Section: Advanced WebAssembly Topics  
### 🔹 Category: WASM Performance and Debugging  
#### ✅ Answer 783: Interfacing Rust with JavaScript asynchronously

To interface Rust with JavaScript asynchronously, use `wasm-bindgen` and Rust's `async`/`await`. Mark Rust functions with `#[wasm_bindgen]` so they can be called as Promises from JavaScript.

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub async fn fetch_data() -> Result<JsValue, JsValue> {
    // Perform async work, e.g., fetch in JS
    Ok(JsValue::from_str("done"))
}
```
