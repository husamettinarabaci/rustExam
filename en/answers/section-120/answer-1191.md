## 📘 Section: Concurrency Design Patterns  
### 🔹 Category: Fan-in and fan-out concurrency patterns  
#### ✅ Answer 1191: Fan-in and fan-out concurrency patterns

Fan-in and fan-out are concurrency patterns for distributing and collecting work. Fan-out distributes tasks to multiple threads or tasks; fan-in collects results from multiple sources into a single point.

**Fan-out example:**
```rust
use std::thread;

fn main() {
    let handles: Vec<_> = (0..4).map(|i| {
        thread::spawn(move || {
            println!("Worker {} is running", i);
        })
    }).collect();
    for h in handles { h.join().unwrap(); }
}
```

**Fan-in example:**
```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    for i in 0..4 {
        let tx = tx.clone();
        thread::spawn(move || {
            tx.send(i * 2).unwrap();
        });
    }
    drop(tx); // Close all senders
    for received in rx {
        println!("Received: {}", received);
    }
}
```

Fan-out is used for parallel task distribution; fan-in is used to collect results. For example, making web requests in parallel (fan-out) and collecting the results (fan-in).
