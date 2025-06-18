## 📘 Section: Concurrency Patterns and Idioms  
### 🔹 Category: Using channels for pipeline processing  
#### ✅ Answer 1063: Using channels for pipeline processing

The pipeline pattern processes data through a series of stages. In Rust, this is easily set up using channels and threads.

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
Here, the first stage sends numbers, the second multiplies them by two, and the final stage prints the results.
