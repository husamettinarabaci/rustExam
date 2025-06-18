## 📘 Section: Advanced Concurrency and Synchronization
### 🔹 Category: Lock-Free Data Structures
#### ✅ Answer 757: Handling deadlocks and livelocks

A deadlock occurs when two or more threads wait for each other, causing the program to halt. Livelock is when threads remain active but make no progress.

Deadlock example:
```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let a = Arc::new(Mutex::new(0));
    let b = Arc::new(Mutex::new(0));
    let a1 = Arc::clone(&a);
    let b1 = Arc::clone(&b);
    let t1 = thread::spawn(move || {
        let _lock_a = a1.lock().unwrap();
        thread::sleep(std::time::Duration::from_millis(10));
        let _lock_b = b1.lock().unwrap();
    });
    let a2 = Arc::clone(&a);
    let b2 = Arc::clone(&b);
    let t2 = thread::spawn(move || {
        let _lock_b = b2.lock().unwrap();
        thread::sleep(std::time::Duration::from_millis(10));
        let _lock_a = a2.lock().unwrap();
    });
    t1.join().unwrap();
    t2.join().unwrap();
}
```

To prevent deadlock and livelock:
- Always acquire locks in a fixed order
- Use lock timeouts
- Minimize the scope of locked sections
- Prefer atomic operations and lock-free structures

These techniques reduce the risk of blocking in concurrent programs.
