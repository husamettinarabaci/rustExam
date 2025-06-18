## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: Error Handling and Safety  
#### ✅ Answer 607: Error handling and safety in FFI code

In FFI, error handling is often done by returning error codes (e.g., int). A Rust function can return a negative or special code to indicate an error to C.

```rust
#[no_mangle]
pub extern "C" fn safe_div(a: i32, b: i32, result: *mut i32) -> i32 {
    if b == 0 {
        return -1; // error code
    }
    unsafe { *result = a / b; }
    0 // success
}
```
