## 📘 Section: Concurrency Design Patterns  
### 🔹 Category: Deadlock prevention strategies  
#### ✅ Answer 1199: Deadlock prevention strategies

A deadlock is a situation where two or more threads wait for each other, causing a standstill. In Rust, this often happens when two locks are acquired in reverse order.

**Deadlock example:**
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
        let _lock_b = b1.lock().unwrap();
    });
    let a2 = Arc::clone(&a);
    let b2 = Arc::clone(&b);
    let t2 = thread::spawn(move || {
        let _lock_b = b2.lock().unwrap();
        let _lock_a = a2.lock().unwrap();
    });
    t1.join().unwrap();
    t2.join().unwrap();
}
```

**Prevention strategies:**
- Always acquire locks in the same order
- Use timeouts
- Minimize the number of locks

Acquiring locks in a consistent order is the most common way to prevent deadlocks.
