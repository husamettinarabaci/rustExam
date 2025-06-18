## 📘 Section: Thread Management and Scheduling  
### 🔹 Category: Work Balancing Across Threads  
#### ✅ Answer 1164: Balancing work across threads

This example distributes work evenly among multiple worker threads. Each worker receives jobs from its own queue, and jobs are assigned in a round-robin fashion.

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let worker_count = 4;
    let job_count = 8;
    let mut senders = vec![];
    let mut handles = vec![];
    for i in 0..worker_count {
        let (tx, rx) = mpsc::channel();
        senders.push(tx);
        handles.push(thread::spawn(move || {
            while let Ok(job) = rx.recv() {
                println!("Worker {}: Task {} is running", i, job);
            }
        }));
    }
    for job in 0..job_count {
        let idx = job % worker_count;
        senders[idx].send(job).unwrap();
    }
    drop(senders);
    for handle in handles {
        handle.join().unwrap();
    }
    println!("All jobs completed.");
}
```
