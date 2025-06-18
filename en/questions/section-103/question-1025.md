## 📘 Section: Shared State and Synchronization
### 🔹 Category: Preventing Deadlocks with Mutex
#### ❓ Question 1025: How to prevent deadlocks with Mutex?

Write a Rust program that demonstrates how to prevent deadlocks when multiple threads access multiple resources by always locking mutexes in the same order.

- Create two resources protected by `Arc<Mutex<T>>`.
- Spawn two threads, each trying to access both resources.
- Show that deadlocks are avoided by always locking in the same order.

🔧 **Task:** Manage lock acquisition order to prevent deadlocks.
