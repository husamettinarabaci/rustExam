## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: Generic Structs  
#### ✅ Answer 153: Implementing methods for generic structs

This example demonstrates how to define a generic struct and implement a method that returns a reference to its inner value.

```rust
struct Wrapper<T> {
    value: T,
}

impl<T> Wrapper<T> {
    fn get_ref(&self) -> &T {
        &self.value
    }
}
```
