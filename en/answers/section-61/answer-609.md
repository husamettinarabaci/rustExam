## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: Exporting Rust Libraries  
#### ✅ Answer 609: Building a Rust library consumable from C and other languages

To make a Rust function callable from C, use `#[no_mangle]` and `extern "C"`. The function signature must be C-compatible.

```rust
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
```
