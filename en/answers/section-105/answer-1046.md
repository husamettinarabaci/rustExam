## 📘 Section: Futures and Async Primitives
### 🔹 Category: Async cancellation and cleanup
#### ✅ Answer 1046: Async cancellation and cleanup

When async tasks are cancelled, the `Drop` trait is used to clean up resources. You can use `tokio::select!` to cancel a task and trigger cleanup. In the example below, a message is printed when a task is cancelled and the resource is dropped.

```rust
use tokio::time::{sleep, Duration};

struct Resource;

impl Drop for Resource {
    fn drop(&mut self) {
        println!("Cleaning up resource!");
    }
}

#[tokio::main]
async fn main() {
    let fut = async {
        let _res = Resource;
        sleep(Duration::from_secs(5)).await;
    };
    tokio::select! {
        _ = fut => {},
        _ = sleep(Duration::from_millis(500)) => {
            println!("Task cancelled!");
        }
    }
    // "Cleaning up resource!" will always be printed.
}
```
