## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Shared State  
#### ❓ Question 183: Using Mutex for shared state

Write a Rust program that uses a `Mutex` to safely increment a shared counter from multiple threads.

- Use `std::sync::Arc` and `std::sync::Mutex`.
- Spawn multiple threads that increment the counter.
- Print the final value after all threads finish.

🔧 **Task:** Demonstrate safe shared state mutation using `Mutex` and `Arc`.
