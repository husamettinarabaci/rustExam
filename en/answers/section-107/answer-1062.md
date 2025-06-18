## 📘 Section: Concurrency Patterns and Idioms  
### 🔹 Category: Implementing fan-in and fan-out patterns  
#### ✅ Answer 1062: Implementing fan-in and fan-out patterns

Fan-in means collecting data from multiple sources into a single consumer; fan-out means distributing data from one source to multiple consumers. In Rust, these patterns are often implemented using channels.

```rust
use std::thread;
use std::sync::mpsc;

fn main() {
    let (tx, rx) = mpsc::channel();
    // Fan-out: Send data to multiple threads
    for i in 0..3 {
        let tx = tx.clone();
        thread::spawn(move || {
            tx.send(format!("Thread {}", i)).unwrap();
        });
    }
    // Fan-in: Collect data from all threads
    for _ in 0..3 {
        println!("Received: {}", rx.recv().unwrap());
    }
}
```
Here, three threads send data to the same channel (fan-in), and the main thread collects all results.
