## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: Generic Enums  
#### ✅ Answer 159: Defining and using generic enums

This example shows how to define a generic enum and implement a method for it. The method checks if the enum is the `Ok` variant.

```rust
enum ResultBox<T, E> {
    Ok(T),
    Err(E),
}

impl<T, E> ResultBox<T, E> {
    fn is_ok(&self) -> bool {
        matches!(self, ResultBox::Ok(_))
    }
}
```
