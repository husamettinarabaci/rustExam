## 📘 Section: Thread Management and Scheduling  
### 🔹 Category: Controlling Thread Pools in Rust  
#### ✅ Answer 1161: Controlling thread pools in Rust

This example uses the `threadpool` crate to create a thread pool. Tasks are submitted to the pool, and the program waits for all tasks to finish. The number of threads in the pool is specified at creation.

```rust
use threadpool::ThreadPool;
use std::sync::mpsc::channel;
use std::thread;

fn main() {
    let pool = ThreadPool::new(4); // pool with 4 threads
    let (tx, rx) = channel();
    for i in 0..8 {
        let tx = tx.clone();
        pool.execute(move || {
            println!("Task {} is running", i);
            tx.send(i).unwrap();
        });
    }
    for _ in 0..8 {
        rx.recv().unwrap();
    }
    println!("All tasks completed.");
}
```
