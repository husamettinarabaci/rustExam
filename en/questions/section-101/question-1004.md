## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Concurrent Futures with `tokio::select!`  
#### ❓ Question 1004: Concurrent futures with `tokio::select!`

Write a Rust program that does the following:

- Start two different async operations (e.g., a timer and a channel).
- Use the `tokio::select!` macro to handle whichever operation completes first.
- Print the completion status of both operations.

🔧 **Task:** Demonstrate waiting on multiple futures concurrently using `tokio::select!`.
