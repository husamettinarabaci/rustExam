## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Thread Communication  
#### ✅ Answer 182: Sending data between threads with channels

This example demonstrates how to use channels to send data between threads.

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    thread::spawn(move || {
        tx.send(42).unwrap();
    });
    let value = rx.recv().unwrap();
    println!("Received: {}", value);
}
```
