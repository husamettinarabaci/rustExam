## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Task Errors and Panics  
#### ✅ Answer 1005: Handling task errors and panics

Errors and panics in async tasks can be caught via the `JoinHandle`. If a task panics, `handle.await` returns an error. Failed tasks do not affect other parts of the application, but results should be handled carefully. Use `Result` and `JoinError` for panicking tasks.

```rust
use tokio;

#[tokio::main]
async fn main() {
    let handle = tokio::spawn(async {
        panic!("Task panicked!");
    });
    match handle.await {
        Ok(_) => println!("Task completed successfully"),
        Err(e) => println!("Task failed: {}", e),
    }
}
```
