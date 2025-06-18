## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: RefCell and Safe Borrowing with try_borrow  
#### ❓ Question 706: Using `try_borrow` and handling failed mutable borrows gracefully

Write a Rust program that does the following:

- Borrow a value mutably from a `RefCell<T>`.
- Attempt a second mutable borrow at the same time and handle the result using `try_borrow_mut`.
- Show how to safely handle the error without panicking.

🔧 **Task:** Provide an example showing how to use `try_borrow` and `try_borrow_mut` to manage borrow errors without panicking.
