## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: Callback Handling  
#### ✅ Answer 603: Handling callbacks from C into Rust

To pass a Rust function as a callback to C, define it with `extern "C"` and pass its pointer to C code.

```rust
#[no_mangle]
pub extern "C" fn rust_callback(x: i32) -> i32 {
    x * 2
}

// Example C code:
// void call_rust(int (*cb)(int)) {
//     int result = cb(21);
//     printf("Result: %d\n", result);
// }
```
