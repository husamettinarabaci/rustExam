## 📘 Section: Advanced Trait System and Coherence  
### 🔹 Category: Trait Implementation and Coherence  
#### ✅ Answer 725: Demonstrating overlapping implementations and compiler rejections

Rust enforces trait coherence, meaning a trait can only be implemented once for a given type in a crate. Overlapping implementations (e.g., for both `T` and `&T` where `T` is any type) are not allowed. The compiler will reject such code to prevent ambiguity.

```rust
trait MyTrait {
    fn do_something(&self);
}

impl<T> MyTrait for T {
    fn do_something(&self) {
        println!("Generic impl");
    }
}

// This will cause a conflict:
// impl<T> MyTrait for &T {
//     fn do_something(&self) {
//         println!("Impl for &T");
//     }
// }
```

If you uncomment the second implementation, the compiler will produce an error about conflicting implementations. This is due to Rust's coherence rules, which ensure that trait implementations are unambiguous.
