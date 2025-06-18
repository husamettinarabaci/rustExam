## 📘 Section: Shared State and Synchronization
### 🔹 Category: One-Time Initialization with OnceCell and Lazy
#### ❓ Question 1024: One-time initialization with OnceCell

Write a Rust program that ensures a value is initialized only once and shared across all threads, using `OnceCell` or `Lazy`.

- Create a value protected by `Arc<OnceCell<T>>` or `Lazy`.
- Spawn multiple threads, each trying to initialize the value.
- Show that the value is initialized only once and all threads see the same value.

🔧 **Task:** Use `OnceCell` or `Lazy` for one-time initialization.
