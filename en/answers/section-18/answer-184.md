## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Deadlocks  
#### ✅ Answer 184: Understanding and preventing deadlocks

A deadlock occurs when two or more threads are waiting for each other to release resources, causing all to block forever. In Rust, this can happen with multiple mutexes.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let a = Arc::new(Mutex::new(1));
    let b = Arc::new(Mutex::new(2));
    let a1 = Arc::clone(&a);
    let b1 = Arc::clone(&b);
    let handle = thread::spawn(move || {
        let _lock_a = a1.lock().unwrap();
        let _lock_b = b1.lock().unwrap();
    });
    let _lock_b = b.lock().unwrap();
    let _lock_a = a.lock().unwrap();
    handle.join().unwrap();
}
```
To prevent deadlocks, always acquire locks in the same order in all threads.
