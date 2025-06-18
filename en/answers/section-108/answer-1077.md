## 📘 Section: Tokio Ecosystem Deep Dive  
### 🔹 Category: Customizing Tokio Thread Pool Behavior  
#### ✅ Answer 1077: Customizing Tokio thread pool behavior

Tokio's runtime can be customized for thread count, stack size, and other parameters using the `Builder` API. This allows you to tune the runtime for your application's needs, such as increasing worker threads for CPU-bound workloads.

```rust
use tokio::runtime::Builder;

fn main() {
    let rt = Builder::new_multi_thread()
        .worker_threads(8)
        .thread_stack_size(3 * 1024 * 1024)
        .enable_all()
        .build()
        .unwrap();

    rt.block_on(async {
        println!("Custom Tokio runtime running");
    });
}
```
