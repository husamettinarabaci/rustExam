## 📘 Section: Async Error Handling
### 🔹 Category: Async Error Handling
#### ✅ Answer 1054: Implementing custom error handling in async tasks

This example spawns multiple async tasks, handles errors in each task individually, and reports them centrally.

```rust
use tokio::task;

async fn may_fail(id: u32) -> Result<(), &'static str> {
    if id % 2 == 0 {
        Ok(())
    } else {
        Err("Task failed!")
    }
}

#[tokio::main]
async fn main() {
    let handles = (0..4).map(|i| {
        task::spawn(async move {
            match may_fail(i).await {
                Ok(_) => println!("Task {} succeeded", i),
                Err(e) => println!("Task {} error: {}", i, e),
            }
        })
    });
    futures::future::join_all(handles).await;
}
```
