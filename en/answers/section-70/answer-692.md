## 📘 Section: Full-Stack Rust Integration  
### 🔹 Category: Using WebAssembly for rich frontend experiences  
#### ✅ Answer 692: Using WebAssembly for rich frontend experiences

Rust can be compiled to WebAssembly (WASM) to build rich frontend applications. WASM enables running Rust code in the browser with near-native speed.

Example:
```rust
// lib.rs
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
```
This function can be compiled to WASM and called from JavaScript. Advantages include performance, safety, and code reuse.
