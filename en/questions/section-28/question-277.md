## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Debugging Borrow Violations at Runtime with Ref and RefMut  
#### ❓ Question 277: Debugging borrow violations at runtime with `Ref` and `RefMut`

Write a Rust program that does the following:

- Wrap a struct field with `RefCell<T>`.
- Attempt to create multiple mutable or immutable borrows at the same time to trigger a borrow violation.
- Use `try_borrow` and `try_borrow_mut` to catch and display borrow errors.
- Print the error message to the user.

🔧 **Task:** Create an example that demonstrates how to debug and handle borrow violations at runtime using `RefCell`, `try_borrow`, and `try_borrow_mut`.
