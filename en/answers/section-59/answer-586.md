## 📘 Section: Frontend Framework Deep Dive  
### 🔹 Category: Integrating Third-Party JS Libraries Safely  
#### ✅ Answer 586: Integrating third-party JS libraries safely

In Rust WASM, JS libraries are integrated using `wasm-bindgen`. Below is an example of calling a JS function. Always use correct types and avoid unsafe code when possible.

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/js/my_lib.js")]
extern "C" {
    fn js_alert(s: &str);
}

// Usage in a component:
js_alert("Hello!");
```
