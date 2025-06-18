## 📘 Section: Advanced WebAssembly Topics  
### 🔹 Category: WASM Performance and Debugging  
#### ✅ Answer 786: Building reusable WASM components

To build reusable WASM components, write modular Rust code and compile each component as a separate WASM module. Use common interfaces and standard data types for interoperability. Export functions with `wasm-bindgen` for use in different applications.

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```
