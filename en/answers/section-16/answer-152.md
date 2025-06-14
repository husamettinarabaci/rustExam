## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: Associated Types  
#### ✅ Answer 152: Defining and using associated types in traits

This example shows how to define a trait with an associated type and implement it for a struct. The associated type allows the trait to be more flexible and reusable.

```rust
trait Container {
    type Item;
    fn get(&self) -> Self::Item;
}

struct IntBox(i32);

impl Container for IntBox {
    type Item = i32;
    fn get(&self) -> i32 {
        self.0
    }
}
```
