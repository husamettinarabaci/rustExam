## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Task Coordination with `JoinHandle`  
#### ✅ Answer 1007: Task coordination with `JoinHandle`

This example spawns multiple async tasks, each printing a different message. All tasks are awaited using their `JoinHandle`s, and a final message is printed after all tasks complete.

```rust
use tokio;

#[tokio::main]
async fn main() {
    let h1 = tokio::spawn(async { println!("First task"); });
    let h2 = tokio::spawn(async { println!("Second task"); });
    let h3 = tokio::spawn(async { println!("Third task"); });

    let _ = h1.await;
    let _ = h2.await;
    let _ = h3.await;

    println!("All tasks completed!");
}
```
