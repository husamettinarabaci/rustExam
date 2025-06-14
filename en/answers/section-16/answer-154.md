## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: Default Trait  
#### ✅ Answer 154: Using the Default trait for initialization

This function shows how to use the `Default` trait to create a new instance of a generic type. The trait ensures that the type can be initialized with default values.

```rust
fn new_default<T: Default>() -> T {
    T::default()
}

let x: i32 = new_default();
let s: String = new_default();
```
