## 📘 Section: Async Patterns in Practice
### 🔹 Category: Handling timeouts in async functions
#### ❓ Question 1154: Handling timeouts in async functions

Write a Rust async function that performs an operation with a timeout using `tokio::time::timeout` or similar.

- Wrap an async operation so it fails if it takes too long.
- Return a timeout error if the operation exceeds the allowed duration.
- Demonstrate both success and timeout cases.

🔧 **Task:** Implement timeout handling for async operations in Rust.
