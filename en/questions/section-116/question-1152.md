## 📘 Section: Async Patterns in Practice
### 🔹 Category: Using async mutexes and locks effectively
#### ❓ Question 1152: Using async mutexes and locks effectively

Write a Rust async function that safely updates a shared counter from multiple tasks using an async-aware mutex.

- Use `tokio::sync::Mutex` or similar for shared state.
- Spawn multiple async tasks that increment the counter.
- Ensure all increments are visible and no data races occur.

🔧 **Task:** Demonstrate safe shared state mutation in async Rust using an async mutex.
