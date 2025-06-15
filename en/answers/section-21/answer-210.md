## 📘 Section: Traits I  
### 🔹 Category: Traits with Associated Types  
#### ✅ Answer 210: Traits with associated types

Traits with associated types allow you to define a placeholder type within a trait, which implementors specify. In this example, the trait `Container` has an associated type `Item`. The struct `NumberBox` implements `Container` and sets `Item` to `i32`. The method `get` returns the contained value.

```rust
trait Container {
    type Item;
    fn get(&self) -> Self::Item;
}

struct NumberBox {
    value: i32,
}

impl Container for NumberBox {
    type Item = i32;
    fn get(&self) -> Self::Item {
        self.value
    }
}

fn main() {
    let nb = NumberBox { value: 42 };
    println!("{}", nb.get());
}
```
