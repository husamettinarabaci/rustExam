## 📘 Section: Thread Management and Scheduling  
### 🔹 Category: Custom Executors  
#### ✅ Answer 1163: Creating custom executors

This example implements a simple executor using a task queue and worker threads. Tasks are sent through a channel, workers receive and execute them, and the program ends when all tasks are done.

```rust
use std::sync::{mpsc, Arc, Mutex};
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    let rx = Arc::new(Mutex::new(rx));
    let mut handles = vec![];
    for _ in 0..4 {
        let rx = Arc::clone(&rx);
        handles.push(thread::spawn(move || {
            while let Ok(task) = rx.lock().unwrap().recv() {
                task();
            }
        }));
    }
    for i in 0..8 {
        let tx = tx.clone();
        tx.send(Box::new(move || println!("Task {} is running", i)) as Box<dyn FnOnce() + Send>).unwrap();
    }
    drop(tx); // No more tasks
    for handle in handles {
        handle.join().unwrap();
    }
    println!("All tasks completed.");
}
```
