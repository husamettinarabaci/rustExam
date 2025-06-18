## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: Simulating graph traversal with interior mutability  
#### ❓ Question 709: Simulating graph traversal with interior mutability

Write a Rust program that does the following:

- Use `Rc<RefCell<T>>` to build a simple directed graph (e.g., nodes with links to other nodes).
- Implement a function that traverses the graph from a starting node, visiting connected nodes.
- Use interior mutability to mark nodes as visited during traversal (e.g., a visited flag).
- Be careful to avoid reference cycles.

🔧 **Task:** Create an example that simulates graph traversal and node marking using interior mutability.
