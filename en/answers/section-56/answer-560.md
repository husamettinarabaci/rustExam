## 📘 Section: Advanced Async Patterns  
### 🔹 Category: Profiling async workloads and detecting bottlenecks  
#### ✅ Answer 560: Profiling async workloads and detecting bottlenecks

To find performance bottlenecks in async Rust code, you can use tools like `tokio-console` for live task monitoring and `flamegraph` for CPU profiling. These tools help visualize where your async tasks spend time. Here is an example of profiling an async workload:

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let h1 = tokio::spawn(async {
        sleep(Duration::from_secs(2)).await;
    });
    let h2 = tokio::spawn(async {
        sleep(Duration::from_secs(1)).await;
    });
    h1.await.unwrap();
    h2.await.unwrap();
}
```

You can monitor this program with `tokio-console` or generate a CPU flamegraph using `cargo flamegraph` to identify bottlenecks.
