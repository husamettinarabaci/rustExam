## 📘 Section: Async Rust in Depth  
### 🔹 Category: Shared State and Arc<Mutex<T>>  
#### ❓ Question 508: Sharing mutable state across tasks with `Arc<Mutex<T>>`

Write a Rust program that does the following:

- Create an `Arc<Mutex<i32>>`.
- Multiple async tasks should update this value.
- The main task should print the final value to the terminal.

🔧 **Task:** Use Arc and Mutex to update a shared value from async tasks and print the result.
