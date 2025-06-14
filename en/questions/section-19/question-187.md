## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Atomic Types  
#### ❓ Question 187: Using atomic types for lock-free concurrency

Write a Rust program that uses `AtomicUsize` to increment a counter from multiple threads without locks.

- Use `std::sync::Arc` and `std::sync::atomic::AtomicUsize`.
- Spawn multiple threads that increment the counter.
- Print the final value after all threads finish.

🔧 **Task:** Demonstrate lock-free concurrency using atomic types.
