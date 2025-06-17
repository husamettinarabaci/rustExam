## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Using Rc<RefCell<T>> in a Single-Threaded Tree Structure  
#### ✅ Answer 273: Using `Rc<RefCell<T>>` in a single-threaded tree structure

The combination of `Rc<RefCell<T>>` allows for multiple ownership and interior mutability in single-threaded tree structures. `Rc` enables multiple nodes to own the same data, while `RefCell` allows for mutation at runtime. In the example below, a simple binary tree is created, and nodes are linked using `Rc<RefCell<T>>`. The code demonstrates updating a child node and printing the values of the root and its children.

```rust
use std::cell::RefCell;
use std::rc::Rc;

type NodeRef = Rc<RefCell<Node>>;

struct Node {
    value: i32,
    left: Option<NodeRef>,
    right: Option<NodeRef>,
}

fn main() {
    let left = Rc::new(RefCell::new(Node { value: 1, left: None, right: None }));
    let right = Rc::new(RefCell::new(Node { value: 3, left: None, right: None }));
    let root = Rc::new(RefCell::new(Node { value: 2, left: Some(left.clone()), right: Some(right.clone()) }));

    // Update the value of the left child
    left.borrow_mut().value = 10;

    // Print the values of the root and its children
    println!("Root: {}", root.borrow().value);
    println!("Left: {}", root.borrow().left.as_ref().unwrap().borrow().value);
    println!("Right: {}", root.borrow().right.as_ref().unwrap().borrow().value);
}
```
