## 📘 Section: Traits I  
### 🔹 Category: Implementing Traits  
#### ✅ Answer 215: Implementing traits for external types

You can implement a trait for an external type only if either the trait or the type is local to your crate (the orphan rule).

```rust
trait MyTrait {
    fn do_something(&self);
}

impl MyTrait for String {
    fn do_something(&self) {
        println!("{}", self);
    }
}
```

You cannot implement both a foreign trait and a foreign type in your crate.
