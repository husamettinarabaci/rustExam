## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Reference Cycles and Prevention  
#### ✅ Answer 280: Understanding and preventing reference cycles

This answer demonstrates how a reference cycle can occur with `Rc` and `RefCell`, leading to a memory leak, and how to prevent it using `Weak` references. `Weak` references do not increase the reference count, thus breaking the cycle.

```rust
use std::cell::RefCell;
use std::rc::{Rc, Weak};

#[derive(Debug)]
struct Node {
    value: i32,
    next: RefCell<Option<Rc<Node>>>,
    prev: RefCell<Option<Weak<Node>>>,
}

fn main() {
    let first = Rc::new(Node {
        value: 1,
        next: RefCell::new(None),
        prev: RefCell::new(None),
    });
    let second = Rc::new(Node {
        value: 2,
        next: RefCell::new(None),
        prev: RefCell::new(None),
    });

    // Creating a reference cycle
    *first.next.borrow_mut() = Some(Rc::clone(&second));
    *second.prev.borrow_mut() = Some(Rc::downgrade(&first));

    println!("first strong = {}, weak = {}", Rc::strong_count(&first), Rc::weak_count(&first));
    println!("second strong = {}, weak = {}", Rc::strong_count(&second), Rc::weak_count(&second));
}
```

In this example, using a `Weak` reference prevents a cycle and avoids a memory leak.
