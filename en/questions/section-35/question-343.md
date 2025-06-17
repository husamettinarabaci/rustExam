## 📘 Section: Testing and Debugging  
### 🔹 Category: Test Modules and Organization  
#### ❓ Question 343: Organizing test modules in your crate

In a Rust project, keep your test code separate and organized from your main code by doing the following:

- Create a module that contains tests for multiple functions.
- Ensure the test module is only compiled when running tests.
- Group related test functions inside the module.

🔧 **Task:** Use `#[cfg(test)]` and `mod tests` to organize your tests in a separate module.
