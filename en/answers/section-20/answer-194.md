## 📘 Section: Unsafe Rust and Advanced Features  
### 🔹 Category: Unsafe Traits  
#### ✅ Answer 194: Defining and implementing unsafe traits

Unsafe traits are used when implementing the trait requires upholding certain invariants that the compiler cannot check. Only use unsafe traits when absolutely necessary.

```rust
unsafe trait MyUnsafeTrait {
    fn do_unsafe(&self);
}

unsafe impl MyUnsafeTrait for i32 {
    fn do_unsafe(&self) {
        println!("Unsafe operation on {}", self);
    }
}
```
