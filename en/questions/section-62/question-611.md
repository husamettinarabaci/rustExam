## 📘 Section: Procedural Macros and Code Generation
### 🔹 Category: Writing a basic derive macro
#### ❓ Question 611: Writing a basic derive macro

Write a Rust procedural macro that does the following:

- Create a custom derive macro named `HelloMacro`.
- When derived for a struct, it should implement a trait that prints `Hello, Macro!` when called.

🔧 **Task:** Use the `proc_macro` crate to build a simple derive macro that generates a trait implementation for a struct.
