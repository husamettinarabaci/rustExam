## 📘 Section: Advanced Async Patterns  
### 🔹 Category: Using `select!` for multiple concurrent futures  
#### ❓ Question 552: Using `select!` for multiple concurrent futures

Write a Rust program that does the following:

- Start two different async operations (e.g., two `tokio::time::sleep` futures).
- Use the `tokio::select!` macro to print which one completes first.

🔧 **Task:** Use `tokio::select!` to asynchronously select and print the result of the first completed future.
