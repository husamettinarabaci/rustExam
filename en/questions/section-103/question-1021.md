## 📘 Section: Shared State and Synchronization
### 🔹 Category: Using Arc<Mutex<T>> for Shared Mutable State
#### ❓ Question 1021: Using Arc<Mutex<T>> for shared mutable state

Write a Rust program that demonstrates how to use `Arc<Mutex<T>>` to share and mutate state safely across multiple threads.

- Create an integer counter protected by `Arc<Mutex<T>>`.
- Spawn 10 threads, each incrementing the counter by 1.
- Wait for all threads to finish and print the final value of the counter.

🔧 **Task:** Use `Arc<Mutex<T>>` to safely share and mutate an integer across threads.
