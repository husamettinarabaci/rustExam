## 📘 Section: Shared State and Synchronization
### 🔹 Category: Thread Coordination with Barrier
#### ❓ Question 1029: Thread coordination with Barrier

Write a Rust program where multiple threads wait at a barrier and proceed together once all have reached it, using `Barrier`.

- Create an `Arc<Barrier>`.
- Spawn 5 threads, each waiting at the barrier.
- All threads proceed together after reaching the barrier.

🔧 **Task:** Synchronize threads using a barrier.
