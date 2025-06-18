## 📘 Section: Language Interoperability  
### 🔹 Category: Error Handling Across Language Boundaries  
#### ✅ Answer 986: Handling errors across language boundaries

To return errors from Rust, use an error code or a null pointer. The C side checks this code.

Rust side:
```rust
#[no_mangle]
pub extern "C" fn divide(a: i32, b: i32, result: *mut i32) -> i32 {
    if b == 0 {
        return -1; // error code
    }
    unsafe { *result = a / b; }
    0 // success
}
```

C side:
```c
int res;
if (divide(10, 0, &res) != 0) {
    // error handling
}
```
In Python, you would similarly check the error code.
