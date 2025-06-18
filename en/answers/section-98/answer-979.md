## 📘 Section: Profiling and Performance Tuning  
### 🔹 Category: Detecting and Fixing Memory Leaks  
#### ✅ Answer 979: Detecting and fixing memory leaks

Memory leaks in Rust usually occur when reference cycles are created with `Rc` or `Arc`. You can detect leaks using `valgrind` or `address sanitizer`.

Leak example:
```rust
use std::rc::Rc;
use std::cell::RefCell;

struct Node {
    next: Option<Rc<RefCell<Node>>>,
}

fn main() {
    let a = Rc::new(RefCell::new(Node { next: None }));
    let b = Rc::new(RefCell::new(Node { next: Some(a.clone()) }));
    a.borrow_mut().next = Some(b.clone()); // reference cycle
    // a and b are never freed
}
```

Solution: Use `Weak` references.

To detect:
```
valgrind --leak-check=full ./target/release/<program_name>
```
or
```
RUSTFLAGS="-Z sanitizer=address" cargo run
```
The leak will be reported as a cycle.
