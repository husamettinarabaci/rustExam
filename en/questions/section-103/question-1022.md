## 📘 Section: Shared State and Synchronization
### 🔹 Category: Using RwLock for Read and Write
#### ❓ Question 1022: Concurrent reading and writing with RwLock

Write a Rust program that demonstrates how to use `RwLock` to allow multiple threads to read data concurrently, but only one thread to write at a time.

- Create an integer protected by `Arc<RwLock<T>>`.
- Spawn 5 threads to read the value and 2 threads to write (increment) the value.
- Wait for all threads to finish and print the final value.

🔧 **Task:** Use `RwLock` to manage concurrent read and write access to shared data.
