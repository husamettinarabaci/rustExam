## 📘 Section: Async Resource Management  
### 🔹 Category: Cleaning up resources on task cancellation  
#### ✅ Answer 1113: Cleaning up resources on task cancellation

In this solution, an async task is started and a resource is created. When the task is cancelled, the resource is dropped and a message is printed.

```rust
use tokio::time::{sleep, Duration};
use tokio::task;

struct Resource;

impl Drop for Resource {
    fn drop(&mut self) {
        println!("Resource cleaned up!");
    }
}

#[tokio::main]
async fn main() {
    let handle = task::spawn(async {
        let _r = Resource;
        sleep(Duration::from_secs(10)).await;
    });
    sleep(Duration::from_millis(100)).await;
    handle.abort(); // Task is cancelled
    // _r is dropped and message is printed
}
```
