## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: Ownership and Lifetime Management  
#### ✅ Answer 604: Managing ownership and lifetimes with FFI

When transferring data between Rust and C, be careful about who is responsible for freeing memory. If Rust allocates memory and passes a pointer to C, provide a corresponding free function.

```rust
#[no_mangle]
pub extern "C" fn alloc_buffer(len: usize) -> *mut u8 {
    let mut v = Vec::with_capacity(len);
    let ptr = v.as_mut_ptr();
    std::mem::forget(v); // Rust relinquishes ownership
    ptr
}

#[no_mangle]
pub extern "C" fn free_buffer(ptr: *mut u8, len: usize) {
    unsafe {
        let _ = Vec::from_raw_parts(ptr, 0, len);
    }
}
```
