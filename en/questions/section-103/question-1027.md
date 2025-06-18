## 📘 Section: Shared State and Synchronization
### 🔹 Category: Shared HashMap with Arc and RwLock
#### ❓ Question 1027: Shared HashMap with Arc<RwLock<HashMap<K, V>>>

Write a Rust program where multiple threads can safely read from and write to the same HashMap.

- Create an `Arc<RwLock<HashMap<String, i32>>>`.
- Spawn 3 threads to insert key-value pairs, and 2 threads to read the map.
- Wait for all threads to finish and print the final HashMap.

🔧 **Task:** Safely perform concurrent reads and writes on a shared HashMap.
