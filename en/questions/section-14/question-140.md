## 📘 Section: Modules II  
### 🔹 Category: Importing macros  
#### ❓ Question 140: Importing macros

Write a Rust example that demonstrates how to import and use macros from another module:

- Create a module that defines a public macro using `#[macro_export]`.
- Call the macro directly (do not import it again with `use`).
- Use the macro in the `main` function.
- Briefly explain why `#[macro_export]` is needed, how macro imports differ from functions, and that importing again with `use` will cause a compile error.

🔧 **Task:** Show how to define, export (to crate root), and use macros from another module in Rust. Explain with an example that importing again with `use` causes an error.
