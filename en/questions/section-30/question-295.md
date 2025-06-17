## 📘 Section: Modules and Crate Structure  
### 🔹 Category: Using Paths in Large Projects  
#### ❓ Question 295: Using `crate::` and `super::` paths in large projects

Create a Rust example that demonstrates how to use `crate::` and `super::` paths in a multi-module project:

- In `lib.rs` or the main file, define a module named `utils` with a public function (`pub fn greet()`).
- Define a parent module named `features` and a child module named `feature_a` inside it.
- In the `feature_a` module, write a function that calls `greet` using both `crate::utils::greet` and `super::super::utils::greet`.
- In the `main` function, call `features::feature_a::call_greet()` to show the output.

🔧 **Task:** Use the `crate::` and `super::` keywords to access functions from different module paths in large projects.
