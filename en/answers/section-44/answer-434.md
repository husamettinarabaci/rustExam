## 📘 Section: Smart Pointers and Resource Management  
### 🔹 Category: Combining Smart Pointers  
#### ✅ Answer 434: Combining `Rc<RefCell<T>>` in data structures

Combining `Rc<T>` and `RefCell<T>` allows multiple owners to mutate shared data. This is common in single-threaded data structures like trees or graphs.

```rust
use std::rc::Rc;
use std::cell::RefCell;

struct Node {
    value: i32,
    next: Option<Rc<RefCell<Node>>>,
}

fn main() {
    let node1 = Rc::new(RefCell::new(Node { value: 1, next: None }));
    let node2 = Rc::new(RefCell::new(Node { value: 2, next: Some(node1.clone()) }));
    node1.borrow_mut().next = Some(node2.clone()); // Creates a cycle
}
```
