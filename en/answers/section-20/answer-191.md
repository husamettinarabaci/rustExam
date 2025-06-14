## 📘 Section: Unsafe Rust and Advanced Features  
### 🔹 Category: Unsafe Blocks  
#### ✅ Answer 191: Using unsafe blocks in Rust

Unsafe blocks are required when performing operations that the Rust compiler cannot guarantee to be safe, such as dereferencing raw pointers. Unsafe code can lead to undefined behavior if not used carefully.

```rust
fn deref_raw(ptr: *const i32) -> i32 {
    unsafe { *ptr }
}
```
