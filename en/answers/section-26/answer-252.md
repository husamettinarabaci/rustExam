## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Smart Pointers and Interior Mutability  
#### ✅ Answer 252: Combining `Box`, `Rc`, and `RefCell` in a single data model

This example demonstrates how to combine `Box`, `Rc`, and `RefCell` in a single data model. `Box<T>` is used for heap allocation, `Rc<T>` enables multiple ownership, and `RefCell<T>` allows for interior mutability at runtime. This pattern is common in tree or graph structures where nodes may be shared and mutated.

```rust
use std::cell::RefCell;
use std::rc::Rc;

struct Node {
    value: i32,
    next: Option<Rc<RefCell<Node>>>,
}

fn main() {
    let first = Rc::new(RefCell::new(Node { value: 1, next: None }));
    let second = Rc::new(RefCell::new(Node { value: 2, next: None }));
    first.borrow_mut().next = Some(Rc::clone(&second));
    // Mutate the second node via shared ownership
    second.borrow_mut().value = 42;
    // Print values
    println!("First: {}", first.borrow().value);
    if let Some(ref next) = first.borrow().next {
        println!("Second: {}", next.borrow().value);
    }
}
```
