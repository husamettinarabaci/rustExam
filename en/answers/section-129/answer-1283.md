## 📘 Section: Fullstack WASM Applications
### 🔹 Category: JS and DOM Interfacing
#### ✅ Answer 1283: Interfacing with JavaScript and DOM APIs

This task demonstrates how to interact with JavaScript and DOM APIs from a Rust WASM module. You can use `web-sys` to manipulate the DOM, and expose functions to JS using `wasm-bindgen`.

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
// Call from JS:
// wasm.change_title("WASM Title!");
