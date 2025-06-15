## 📘 Section: Generics I  
### 🔹 Category: Generic associated types  
#### ✅ Answer 219: Generic associated types

A trait with an associated type allows implementors to specify a concrete type. Here, `Container` uses an associated type `Item` and is implemented for `NumberBox`.

```rust
trait Container {
    type Item;
    fn contains(&self, item: &Self::Item) -> bool;
}

struct NumberBox {
    value: i32,
}

impl Container for NumberBox {
    type Item = i32;
    fn contains(&self, item: &i32) -> bool {
        self.value == *item
    }
}

fn main() {
    let box1 = NumberBox { value: 10 };
    println!("Contains 10? {}", box1.contains(&10));
    println!("Contains 5? {}", box1.contains(&5));
}
```
This demonstrates how to use associated types in a trait and implement it for a struct.
