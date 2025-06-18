## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Spawning Tasks with Tokio  
#### ✅ Answer 1001: Spawning tasks with `tokio::spawn`

This example shows how to spawn an async task using the Tokio runtime. The `tokio::spawn` function runs the given async block in the background and returns a `JoinHandle`. You can `await` the handle to wait for the task to finish.

```rust
use tokio;

#[tokio::main]
async fn main() {
    let handle = tokio::spawn(async {
        println!("Task is running!");
    });
    handle.await.unwrap();
}
```
