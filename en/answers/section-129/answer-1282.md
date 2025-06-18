## 📘 Section: Fullstack WASM Applications
### 🔹 Category: WASM Compilation and Dependencies
#### ✅ Answer 1282: Using `wasm-bindgen` and `wasm-pack`

This task demonstrates compiling Rust code to WebAssembly and enabling JavaScript interop using `wasm-bindgen` and `wasm-pack`. `wasm-bindgen` exposes Rust functions to JS, and `wasm-pack` simplifies building and packaging.

```rust
// In Cargo.toml:
// [dependencies]
// wasm-bindgen = "*"

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet() -> String {
    "Hello from Rust!".to_string()
}
```
// Build with wasm-pack and call from JS:
// import * as wasm from './pkg';
// alert(wasm.greet());
