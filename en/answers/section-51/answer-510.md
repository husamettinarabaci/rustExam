## 📘 Section: Async Rust in Depth  
### 🔹 Category: Async Workload Benchmarking and Profiling  
#### ✅ Answer 510: Benchmarking and profiling async workloads

To measure async code performance, record the time before and after the operation. For advanced profiling, use tools like `tokio-console` or `flamegraph`.

```rust
use tokio::time::{sleep, Instant, Duration};

#[tokio::main]
async fn main() {
    let start = Instant::now();
    sleep(Duration::from_secs(1)).await;
    let elapsed = start.elapsed();
    println!("Operation duration: {:?}", elapsed);
}
```
