## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: Weak and Breaking Cycles  
#### ✅ Answer 702: Breaking reference cycles with `Weak<T>`

`Weak<T>` references break the ownership chain, preventing reference cycles. In this example, a node's parent link is held as a `Weak` reference, so no cycle is formed and memory leaks are avoided.

```rust
use std::cell::RefCell;
use std::rc::{Rc, Weak};

struct Node {
    value: i32,
    parent: RefCell<Weak<Node>>,
    child: RefCell<Option<Rc<Node>>>,
}

fn main() {
    let parent = Rc::new(Node {
        value: 1,
        parent: RefCell::new(Weak::new()),
        child: RefCell::new(None),
    });
    let child = Rc::new(Node {
        value: 2,
        parent: RefCell::new(Rc::downgrade(&parent)),
        child: RefCell::new(None),
    });
    *parent.child.borrow_mut() = Some(child.clone());
    // parent -> child, child -> parent (Weak)
    // No cyclic ownership due to Weak reference
}
```
