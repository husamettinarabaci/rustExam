## 📘 Section: Concurrency Design Patterns  
### 🔹 Category: Pipeline and stages processing  
#### ✅ Answer 1192: Pipeline and stages processing

Pipeline and staged processing are concurrency patterns where data passes through a series of stages, each possibly running in its own thread or task. Each stage processes the data and passes it to the next.

**Example:**
```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx1, rx1) = mpsc::channel();
    let (tx2, rx2) = mpsc::channel();

    // First stage
    thread::spawn(move || {
        for i in 1..=5 {
            tx1.send(i).unwrap();
        }
    });

    // Second stage
    thread::spawn(move || {
        for val in rx1 {
            tx2.send(val * 2).unwrap();
        }
    });

    // Final stage
    for result in rx2 {
        println!("Result: {}", result);
    }
}
```

Advantages: Each stage works independently, workload is distributed, and the pipeline can run in parallel. Useful for data processing, streaming, and transformation tasks.
