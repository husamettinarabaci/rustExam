## 📘 Section: Async Rust in Depth  
### 🔹 Category: Tasks with Tokio  
#### ✅ Answer 502: Using `tokio::spawn` to run concurrent tasks

With `tokio::spawn`, you can launch multiple async tasks and await their completion using `tokio::join!`.

```rust
use tokio;

#[tokio::main]
async fn main() {
    let task1 = tokio::spawn(async {
        println!("Task 1 running");
    });
    let task2 = tokio::spawn(async {
        println!("Task 2 running");
    });
    let _ = tokio::join!(task1, task2);
}
```
