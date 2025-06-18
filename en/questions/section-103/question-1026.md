## 📘 Section: Shared State and Synchronization
### 🔹 Category: Shared Vector with Arc and Mutex
#### ❓ Question 1026: Shared vector with Arc<Mutex<Vec<T>>>

Write a Rust program where multiple threads can safely push elements to the same vector.

- Create an `Arc<Mutex<Vec<i32>>>`.
- Spawn 5 threads, each pushing a number to the vector.
- Wait for all threads to finish and print the final vector.

🔧 **Task:** Safely push elements to a shared vector from multiple threads.
