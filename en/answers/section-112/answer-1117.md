## 📘 Section: Async Resource Management  
### 🔹 Category: Async Resource Management  
#### ✅ Answer 1117: Using `tokio::sync::Semaphore` for resource limits

This example uses `tokio::sync::Semaphore` to limit the number of resources that can be open concurrently. Each task acquires a permit, opens a resource, and releases the permit when done.

```rust
use std::sync::Arc;
use tokio::sync::Semaphore;
use tokio::fs::File;

#[tokio::main]
async fn main() {
    let semaphore = Arc::new(Semaphore::new(2)); // At most 2 resources at once
    let mut handles = vec![];
    for i in 0..5 {
        let sem = semaphore.clone();
        handles.push(tokio::spawn(async move {
            let _permit = sem.acquire().await.unwrap();
            let _file = File::open("test.txt").await;
            println!("Task {i} opened resource");
            // _permit is dropped, resource is closed
        }));
    }
    for h in handles { h.await.unwrap(); }
}
```
