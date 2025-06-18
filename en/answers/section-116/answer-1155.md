## 📘 Section: Async Patterns in Practice
### 🔹 Category: Async rate limiting techniques
#### ✅ Answer 1155: Async rate limiting techniques

This answer shows how to limit the number of concurrent async tasks using rate limiting. You can use `tokio::sync::Semaphore` or similar primitives.

```rust
use tokio::sync::Semaphore;
use std::sync::Arc;
use tokio::time::{sleep, Duration};

async fn do_work(id: usize) {
    println!("Task {} started", id);
    sleep(Duration::from_secs(1)).await;
    println!("Task {} finished", id);
}

#[tokio::main]
async fn main() {
    let semaphore = Arc::new(Semaphore::new(2)); // Limit to 2 concurrent tasks
    let mut handles = vec![];
    for i in 0..5 {
        let permit = semaphore.clone().acquire_owned().await.unwrap();
        handles.push(tokio::spawn(async move {
            do_work(i).await;
            drop(permit);
        }));
    }
    for h in handles { h.await.unwrap(); }
}
```
