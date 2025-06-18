## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: Understanding borrow checker limitations and runtime enforcement in cyclic data  
#### ❓ Question 710: Understanding borrow checker limitations and runtime enforcement in cyclic data

Write a Rust example that does the following:

- Demonstrate how `RefCell` enforces borrowing rules at runtime.
- Attempt to take multiple mutable borrows at the same time to trigger a panic.
- Ensure the code fails at runtime, not at compile time.
- Explain how to catch and prevent such errors.

🔧 **Task:** Create an example that triggers a runtime borrow violation with `RefCell`, and show how to handle or avoid this situation.
