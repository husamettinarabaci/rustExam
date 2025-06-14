## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Send and Sync Traits  
#### ✅ Answer 186: Understanding the Send and Sync traits

`Send` allows a type to be transferred between threads. `Sync` allows a type to be referenced from multiple threads safely.

- `i32`, `String`, and `Vec<T>` are both `Send` and `Sync`.
- `Rc<T>` is neither `Send` nor `Sync`.
- `Arc<T>` is both `Send` and `Sync` if `T` is `Send` and `Sync`.

These traits are auto-implemented by the compiler for types that are safe to share or move between threads.
