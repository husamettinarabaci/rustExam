## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: Rc, RefCell, and Aliasing  
#### ✅ Answer 705: Demonstrating aliasing with `Rc` and `RefCell`

With `Rc<RefCell<T>>`, you can create multiple references (aliases) to the same data. You can access and mutate the data through any alias, but attempting multiple mutable borrows at once will panic at runtime.

```rust
use std::cell::RefCell;
use std::rc::Rc;

fn main() {
    let data = Rc::new(RefCell::new(10));
    let alias1 = data.clone();
    let alias2 = data.clone();
    *alias1.borrow_mut() += 5;
    println!("alias2: {}", alias2.borrow()); // 15
}
```

Aliasing can lead to data races and panics if not used carefully.
