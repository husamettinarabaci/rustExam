## 📘 Section: Tokio Ecosystem Deep Dive  
### 🔹 Category: Blocking Tasks in Tokio  
#### ✅ Answer 1073: Spawning blocking tasks with `spawn_blocking`

Tokio provides `spawn_blocking` for running blocking operations without stalling the async runtime. This function offloads blocking code to a dedicated thread pool, ensuring that async tasks remain responsive.

```rust
use tokio::task;

#[tokio::main]
async fn main() {
    let result = task::spawn_blocking(|| {
        // Simulate a blocking operation
        std::thread::sleep(std::time::Duration::from_secs(1));
        42
    })
    .await
    .unwrap();
    println!("Blocking task result: {}", result);
}
```
