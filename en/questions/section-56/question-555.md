## 📘 Section: Advanced Async Patterns  
### 🔹 Category: Using `tokio::sync::RwLock` for concurrent reads  
#### ❓ Question 555: Using `tokio::sync::RwLock` for concurrent reads

Write a Rust program that does the following:

- Use `tokio::sync::RwLock` to protect shared data.
- Allow multiple async tasks to read the data concurrently.
- When a task writes to the data, other reads should wait.
- Print the order of read and write operations to the terminal.

🔧 **Task:** Implement an example that demonstrates concurrent reads and exclusive writes using `tokio::sync::RwLock`.
