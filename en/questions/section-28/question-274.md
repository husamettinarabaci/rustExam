## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Shared Mutable State with Arc<Mutex<T>>  
#### ❓ Question 274: Using `Arc<Mutex<T>>` for shared mutable state in threads

Write a Rust program that does the following:

- Define a data structure that can be accessed by multiple threads.
- Use `Arc<Mutex<T>>` to wrap the shared data.
- Spawn multiple threads, each updating the shared data.
- Show that the shared data is updated correctly after all threads complete.

🔧 **Task:** Create an example using `Arc<Mutex<T>>` to safely share and mutate data across threads in Rust.
