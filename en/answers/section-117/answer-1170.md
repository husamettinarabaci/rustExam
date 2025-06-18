## 📘 Section: Thread Management and Scheduling  
### 🔹 Category: Integrating Threads with Async Runtimes  
#### ✅ Answer 1170: Integrating threads with async runtimes

In Rust, threads and async runtimes (e.g., Tokio) can be used together. Threads are useful for CPU-bound tasks, while async tasks are ideal for IO-bound operations. You can start an async runtime inside a thread or run async tasks within threads. Here is a short example:

```rust
use std::thread;
use tokio::runtime::Runtime;

fn main() {
    let handle = thread::spawn(|| {
        let rt = Runtime::new().unwrap();
        rt.block_on(async {
            println!("Async task running inside a thread");
        });
    });
    handle.join().unwrap();
    println!("Thread and async task completed together.");
}
```
