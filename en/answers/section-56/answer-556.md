## 📘 Section: Advanced Async Patterns  
### 🔹 Category: Implementing a task scheduler in Rust  
#### ✅ Answer 556: Implementing a task scheduler in Rust

This solution shows how to implement a simple async task scheduler using `tokio::time::interval` to run multiple tasks at different intervals.

```rust
use tokio::time::{interval, Duration};

#[tokio::main]
async fn main() {
    let mut int1 = interval(Duration::from_millis(300));
    let mut int2 = interval(Duration::from_millis(500));

    let t1 = tokio::spawn(async move {
        for _ in 0..3 {
            int1.tick().await;
            println!("Task 1 running");
        }
    });
    let t2 = tokio::spawn(async move {
        for _ in 0..2 {
            int2.tick().await;
            println!("Task 2 running");
        }
    });
    let _ = tokio::join!(t1, t2);
}
```
