## 📘 Section: Async Patterns in Practice
### 🔹 Category: Async Retry and Backoff Logic
#### ❓ Question 1151: Implementing async retry and backoff logic

Write a Rust async function that attempts to perform an operation multiple times with exponential backoff on failure.

- Use async/await and a loop to retry an async operation.
- Wait for an increasing delay (e.g., 100ms, 200ms, 400ms, ...) between retries.
- Stop retrying after a maximum number of attempts or on success.

🔧 **Task:** Implement an async retry mechanism with exponential backoff for a fallible operation.
