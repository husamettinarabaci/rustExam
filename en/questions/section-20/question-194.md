## 📘 Section: Error Handling  
### 🔹 Category: Dynamic Errors with Box<dyn Error>  
#### ❓ Question 194: Using `Box<dyn Error>` for dynamic errors

Write a Rust function that returns `Result<T, Box<dyn std::error::Error>>` to allow for dynamic error handling.

- Define a function that can return different error types using `Box<dyn Error>`.
- Use standard library errors (e.g., parsing or IO errors) in your function.
- Show how to call this function and handle errors in `main`.

🔧 **Task:** Demonstrate how to use `Box<dyn Error>` as a flexible error type in Rust functions.
