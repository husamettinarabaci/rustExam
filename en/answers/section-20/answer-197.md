## 📘 Section: Unsafe Rust and Advanced Features  
### 🔹 Category: Volatile Operations  
#### ✅ Answer 197: Performing volatile memory operations

Volatile operations are used when interacting with hardware or memory-mapped I/O, where the compiler must not optimize away reads or writes.

```rust
fn write_volatile(ptr: *mut u32, val: u32) {
    unsafe {
        std::ptr::write_volatile(ptr, val);
    }
}
```
