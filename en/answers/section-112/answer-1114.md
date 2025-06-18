## 📘 Section: Async Resource Management  
### 🔹 Category: Managing connection pools asynchronously  
#### ✅ Answer 1114: Managing connection pools asynchronously

In this solution, multiple async tasks acquire and release connections from a pool. The pool is managed using `tokio::sync::Semaphore`.

```rust
use tokio::sync::Semaphore;
use std::sync::Arc;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let pool = Arc::new(Semaphore::new(2));
    let mut handles = vec![];
    for i in 0..4 {
        let pool = pool.clone();
        handles.push(tokio::spawn(async move {
            let permit = pool.acquire().await.unwrap();
            println!("Task {i} acquired connection");
            sleep(Duration::from_millis(100)).await;
            drop(permit);
            println!("Task {i} released connection");
        }));
    }
    for h in handles { h.await.unwrap(); }
}
```
