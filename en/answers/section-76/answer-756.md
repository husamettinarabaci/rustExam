## 📘 Section: Advanced Concurrency and Synchronization
### 🔹 Category: Lock-Free Data Structures
#### ✅ Answer 756: Building a thread pool in Rust

A thread pool is a set of worker threads that wait for and execute tasks from a queue. This optimizes resource usage and balances the workload.

```rust
use std::sync::{mpsc, Arc, Mutex};
use std::thread;

struct ThreadPool {
    workers: Vec<thread::JoinHandle<()>>,
    sender: mpsc::Sender<Box<dyn FnOnce() + Send + 'static>>,
}

impl ThreadPool {
    fn new(size: usize) -> Self {
        let (sender, receiver) = mpsc::channel();
        let receiver = Arc::new(Mutex::new(receiver));
        let mut workers = Vec::with_capacity(size);
        for _ in 0..size {
            let receiver = Arc::clone(&receiver);
            workers.push(thread::spawn(move || {
                while let Ok(job) = receiver.lock().unwrap().recv() {
                    job();
                }
            }));
        }
        ThreadPool { workers, sender }
    }
    fn execute<F>(&self, f: F)
    where
        F: FnOnce() + Send + 'static,
    {
        self.sender.send(Box::new(f)).unwrap();
    }
}

fn main() {
    let pool = ThreadPool::new(4);
    for i in 0..8 {
        pool.execute(move || {
            println!("Job {} is running", i);
        });
    }
}
```

This example shows how the thread pool distributes jobs among threads and optimizes resource usage.
