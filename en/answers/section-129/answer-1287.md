## 📘 Section: Fullstack WASM Applications
### 🔹 Category: WASM Debugging
#### ✅ Answer 1287: Debugging WASM applications

This task demonstrates debugging in Rust WASM applications using debug symbols, source maps, and panic management. `console_error_panic_hook` forwards panics to the JS console.

```rust
// In Cargo.toml:
// [dependencies]
// console_error_panic_hook = "*"

use std::panic;

pub fn set_panic_hook() {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
}

// Call in main:
// set_panic_hook();
```
// Build with debug symbols:
// wasm-pack build --dev
