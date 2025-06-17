## 📘 Section: Smart Pointers and Resource Management  
### 🔹 Category: Preventing Memory Leaks  
#### ✅ Answer 438: Preventing memory leaks with `Weak<T>`

Reference cycles with `Rc<T>` can cause memory leaks because the reference count never reaches zero. `Weak<T>` is a non-owning reference that doesn't increase the count, breaking cycles.

```rust
use std::rc::{Rc, Weak};
use std::cell::RefCell;

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
}
```
