## 📘 Section: Shared State and Synchronization
### 🔹 Category: Incrementing a Counter with Arc and Mutex
#### ❓ Question 1030: Thread-safe counter increment with Arc<Mutex<T>>

Write a Rust program where multiple threads safely increment the same counter.

- Create an `Arc<Mutex<i32>>`.
- Spawn 10 threads, each incrementing the counter by 1.
- Wait for all threads to finish and print the final value.

🔧 **Task:** Use `Arc<Mutex<T>>` to safely increment a counter from multiple threads.
