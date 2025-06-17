## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Borrowing Data from RefCell and Handling Panics  
#### ❓ Question 276: Borrowing data from `RefCell` and handling panics

Write a Rust program that does the following:

- Wrap a struct field with `RefCell<T>`.
- Attempt to create multiple mutable borrows at the same time to demonstrate a panic.
- Use `try_borrow_mut` to safely handle borrowing errors instead of panicking.

🔧 **Task:** Create a safe example that shows how to avoid panics when borrowing from a `RefCell` by using `try_borrow_mut` and handling errors appropriately.
