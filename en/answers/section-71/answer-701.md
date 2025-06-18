## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: Rc, RefCell, and Cyclic Graphs  
#### ✅ Answer 701: Building a cyclic graph with `Rc<RefCell<T>>`

You can create cyclic references in Rust using `Rc<RefCell<T>>`. In this example, two nodes reference each other, forming a cycle. `Rc` enables shared ownership, while `RefCell` allows interior mutability.

```rust
use std::cell::RefCell;
use std::rc::Rc;

struct Node {
    value: i32,
    next: Option<Rc<RefCell<Node>>>,
}

fn main() {
    let a = Rc::new(RefCell::new(Node { value: 1, next: None }));
    let b = Rc::new(RefCell::new(Node { value: 2, next: Some(a.clone()) }));
    // Create the cycle:
    a.borrow_mut().next = Some(b.clone());
    // Now a -> b -> a forms a cycle
}
```
