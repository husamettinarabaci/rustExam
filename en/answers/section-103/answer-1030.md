## 📘 Section: Shared State and Synchronization
### 🔹 Category: Incrementing a Counter with Arc and Mutex
#### ✅ Answer 1030: Thread-safe counter increment with Arc<Mutex<T>>

`Arc<Mutex<T>>` allows multiple threads to safely increment the same counter. Each thread locks the counter, increments it, and releases the lock.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Result: {}", *counter.lock().unwrap());
}
```
