## 📘 Section: Async Rust in Depth  
### 🔹 Category: Tasks and join/select!  
#### ❓ Question 506: Running tasks sequentially vs concurrently with `join!` and `select!`

Write a Rust program that does the following:

- Use `tokio::join!` to start two async functions concurrently and wait for both results.
- Use `tokio::select!` to get the result of whichever of two async operations completes first.
- Print the results to the terminal.

🔧 **Task:** Use the join! and select! macros to manage async tasks and display their output.
