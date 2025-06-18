## 📘 Section: WASM Performance and Debugging
### 🔹 Category: WASM Debugging
#### ✅ Answer 1376: Debugging Rust panics in WASM

By default, Rust panics in WASM may fail silently. To see panic messages in the browser console, use the `console_error_panic_hook` crate.

```rust
// In Cargo.toml:
// console_error_panic_hook = "0.1"

use console_error_panic_hook;
use std::panic;

#[wasm_bindgen(start)]
pub fn main() {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
}
```

This makes panic messages visible in the browser console, making debugging easier.
