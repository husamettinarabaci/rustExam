## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: RefCell, Interior Mutability, and Panic Tracking  
#### ❓ Question 703: Borrowing mutable data through `RefCell` and tracking runtime panics

Write a Rust program that does the following:

- Use `RefCell<T>` to borrow a value both immutably and mutably.
- Attempt to borrow mutably more than once at the same time and show the resulting panic.
- Explain the panic message and its cause.

🔧 **Task:** Provide an example showing how `RefCell` enforces borrowing rules at runtime and panics when violated.
