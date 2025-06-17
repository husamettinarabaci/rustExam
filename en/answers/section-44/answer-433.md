## 📘 Section: Smart Pointers and Resource Management  
### 🔹 Category: Interior Mutability  
#### ✅ Answer 433: Mutating shared data with `RefCell<T>`

`RefCell<T>` enables interior mutability, allowing you to mutate data even when the value is not declared as mutable. Unlike `&mut`, borrow checking happens at runtime, not compile time.

```rust
use std::cell::RefCell;

fn main() {
    let data = RefCell::new(5);
    *data.borrow_mut() += 1;
    println!("{}", data.borrow());
}
```
