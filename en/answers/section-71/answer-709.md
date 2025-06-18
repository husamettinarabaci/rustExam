## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: Simulating graph traversal with interior mutability  
#### ✅ Answer 709: Simulating graph traversal with interior mutability

In this example, a simple directed graph is built using `Rc<RefCell<T>>`, and nodes are marked as visited during traversal. Interior mutability allows updating the "visited" field while traversing. To avoid reference cycles, links are kept one-way.

```rust
use std::cell::RefCell;
use std::rc::Rc;

struct Node {
    value: i32,
    visited: bool,
    neighbors: Vec<Rc<RefCell<Node>>>,
}

fn traverse(node: &Rc<RefCell<Node>>) {
    let mut n = node.borrow_mut();
    if n.visited {
        return;
    }
    n.visited = true;
    println!("Visited: {}", n.value);
    let neighbors = n.neighbors.clone();
    drop(n); // End borrow before recursion
    for neighbor in neighbors {
        traverse(&neighbor);
    }
}

fn main() {
    let node1 = Rc::new(RefCell::new(Node { value: 1, visited: false, neighbors: vec![] }));
    let node2 = Rc::new(RefCell::new(Node { value: 2, visited: false, neighbors: vec![] }));
    let node3 = Rc::new(RefCell::new(Node { value: 3, visited: false, neighbors: vec![] }));
    node1.borrow_mut().neighbors.push(node2.clone());
    node2.borrow_mut().neighbors.push(node3.clone());
    traverse(&node1);
}
```
