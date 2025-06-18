## 📘 Section: Testing and Debugging Concurrent Code  
### 🔹 Category: Logging and Tracing in Concurrency Tests  
#### ✅ Answer 1145: Logging and tracing in concurrency tests

You can use the `log` crate and thread IDs to log from multiple threads. Each thread logs its own ID.

```rust
use std::thread;
use log::info;

fn main() {
    env_logger::init();
    let mut handles = vec![];
    for _ in 0..4 {
        handles.push(thread::spawn(|| {
            let id = thread::current().id();
            info!("Thread {:?} running", id);
        }));
    }
    for h in handles { h.join().unwrap(); }
}
```
