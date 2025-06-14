## 📘 Section: Traits I  
### 🔹 Category: Blanket Implementations  
#### ✅ Answer 219: Blanket implementations

A blanket implementation is when you implement a trait for all types that satisfy certain bounds.

```rust
trait MyTrait {
    fn do_it(&self);
}

impl<T: std::fmt::Debug> MyTrait for T {
    fn do_it(&self) {
        println!("{:?}", self);
    }
}
```

This allows any type that implements `Debug` to use `do_it()`.
