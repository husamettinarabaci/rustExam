## 📘 Section: Unsafe Code Patterns and Safety
### 🔹 Category: Manual Memory Allocation and Deallocation
#### ✅ Answer 654: Manual memory allocation and deallocation

Rust allows manual memory management with types like `Box`, `Vec`, and raw pointers. Always ensure memory is properly allocated and freed.

```rust
fn main() {
    let b = Box::new(10); // Allocates memory
    println!("{}", b);
    // Memory is freed when b goes out of scope
}
```

With raw pointers, you must use `Box::into_raw` and `Box::from_raw` to avoid leaks. Never double-free or use-after-free memory.
