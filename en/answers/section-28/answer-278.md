## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Combining Smart Pointers  
#### ✅ Answer 278: Combining smart pointers in nested structures

In this example, both `Rc<RefCell<T>>` and `Box<T>` are used in a tree structure to satisfy ownership and sharing requirements. The value of each node is owned via `Box`, while children are shared and mutable via `Rc<RefCell<Node>>`. `Rc` enables multiple ownership, `RefCell` allows runtime mutability, and `Box` provides heap allocation and ownership.

```rust
use std::cell::RefCell;
use std::rc::Rc;

// Each node's value is owned via Box, children are shared and mutable via Rc<RefCell<Node>>.
struct Node {
    value: Box<i32>,
    children: Vec<Rc<RefCell<Node>>>,
}

fn main() {
    let leaf = Rc::new(RefCell::new(Node {
        value: Box::new(3),
        children: vec![],
    }));
    let branch = Rc::new(RefCell::new(Node {
        value: Box::new(2),
        children: vec![leaf.clone()],
    }));
    let root = Node {
        value: Box::new(1),
        children: vec![branch.clone(), leaf.clone()],
    };
    // root.children[0] and root.children[1] can both point to the same leaf.
    println!("Root: {}", *root.value);
    println!("Branch: {}", *branch.borrow().value);
    println!("Leaf: {}", *leaf.borrow().value);
}
```
