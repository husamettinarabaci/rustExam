## 📘 Section: Shared State and Synchronization
### 🔹 Category: Using Condition Variables with Mutex
#### ❓ Question 1028: Thread synchronization with Condvar

Write a Rust program where one thread waits for a condition to be met, and another thread signals that condition using `Mutex` and `Condvar`.

- Create an `Arc<(Mutex<bool>, Condvar)>`.
- One thread waits until the condition is true.
- Another thread sets the condition and notifies the waiting thread.

🔧 **Task:** Use a condition variable to synchronize threads.
