## 📘 Section: Futures and Async Primitives
### 🔹 Category: Implementing async mutexes and locks
#### ❓ Question 1043: Implementing async mutexes and locks

Write Rust code that does the following:

- Use an async mutex such as `tokio::sync::Mutex` to protect a shared value.
- Show that multiple async tasks cannot update the value at the same time.
- Write an async function that updates the locked value.

🔧 **Task:** Demonstrate the use of async mutexes to prevent data races in an async context.
