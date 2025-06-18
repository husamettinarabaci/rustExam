## 📘 Section: Async Error Handling
### 🔹 Category: Async Error Handling
#### ✅ Answer 1055: Recovering from panics in async contexts

This example simulates a panic in an async task and shows how to catch it using the `JoinHandle` result, preventing the program from crashing.

```rust
use tokio::task;

#[tokio::main]
async fn main() {
    let handle = task::spawn(async {
        panic!("Something went wrong!");
    });

    match handle.await {
        Ok(_) => println!("Task completed successfully."),
        Err(e) => println!("Task panicked: {}", e),
    }
}
```
