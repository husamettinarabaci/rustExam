## 📘 Section: Advanced WebAssembly Topics  
### 🔹 Category: WASM Performance and Debugging  
#### ✅ Answer 782: Memory management in WASM modules

Memory management in WASM modules relies on Rust's `std::alloc` and WASM's linear memory model. Rust's ownership and RAII prevent leaks. To grow memory, use `memory.grow` or dynamic structures like `Vec` in Rust.

```rust
// Dynamic memory allocation in Rust for WASM
#[no_mangle]
pub extern "C" fn allocate(size: usize) -> *mut u8 {
    let mut buf = Vec::with_capacity(size);
    let ptr = buf.as_mut_ptr();
    std::mem::forget(buf);
    ptr
}
```
