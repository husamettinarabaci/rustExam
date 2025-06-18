## 📘 Section: Async Resource Management  
### 🔹 Category: Async Resource Management  
#### ✅ Answer 1120: Debugging resource management issues

This example simulates issues like deadlock and leaks in async resource management. Logging is used to detect problems, and solutions are demonstrated.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let d1 = data.clone();
    let d2 = data.clone();

    // Deadlock example
    let h1 = tokio::spawn(async move {
        let _lock = d1.lock().await;
        println!("Task 1 acquired lock");
        // If another await is called here, a deadlock may occur
    });
    let h2 = tokio::spawn(async move {
        let _lock = d2.lock().await;
        println!("Task 2 acquired lock");
    });
    let _ = tokio::join!(h1, h2);
    // Use logs to track lock acquisition and detect issues
}
```
