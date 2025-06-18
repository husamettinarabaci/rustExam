## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: Shared Ownership and Tree Structures  
#### ✅ Answer 704: Implementing a tree structure with shared ownership

A tree structure can be built using `Rc` and `RefCell`. Each node can have multiple children, and children can be mutated. This enables shared ownership and interior mutability.

```rust
use std::cell::RefCell;
use std::rc::Rc;

type NodeRef = Rc<RefCell<Node>>;

struct Node {
    value: i32,
    children: Vec<NodeRef>,
}

fn main() {
    let root = Rc::new(RefCell::new(Node { value: 1, children: vec![] }));
    let child1 = Rc::new(RefCell::new(Node { value: 2, children: vec![] }));
    let child2 = Rc::new(RefCell::new(Node { value: 3, children: vec![] }));
    root.borrow_mut().children.push(child1.clone());
    root.borrow_mut().children.push(child2.clone());
    // root -> [child1, child2]
}
```
