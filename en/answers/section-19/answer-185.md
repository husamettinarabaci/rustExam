## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Thread Pools  
#### ✅ Answer 185: Using thread pools for concurrent tasks

A thread pool allows you to reuse a fixed number of threads to execute many tasks. The `threadpool` crate provides a simple API for this.

```rust
use threadpool::ThreadPool;
use std::sync::mpsc::channel;

fn main() {
    let pool = ThreadPool::new(4);
    let (tx, rx) = channel();
    for i in 0..8 {
        let tx = tx.clone();
        pool.execute(move || {
            tx.send(i * i).unwrap();
        });
    }
    for _ in 0..8 {
        println!("Result: {}", rx.recv().unwrap());
    }
}
```
