## 📘 Section: Shared State and Synchronization
### 🔹 Category: Atomic Types for Counters
#### ❓ Question 1023: Thread-safe counter with AtomicUsize

Write a Rust program that uses `AtomicUsize` to create a thread-safe counter that can be incremented safely by multiple threads.

- Create a counter protected by `Arc<AtomicUsize>`.
- Spawn 10 threads, each incrementing the counter by 1.
- Wait for all threads to finish and print the final value.

🔧 **Task:** Use `AtomicUsize` for a thread-safe counter.
