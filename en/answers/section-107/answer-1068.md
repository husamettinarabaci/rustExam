## 📘 Section: Concurrency Patterns and Idioms  
### 🔹 Category: Avoiding deadlocks in complex concurrency  
#### ✅ Answer 1068: Avoiding deadlocks in complex concurrency

A deadlock occurs when two or more threads wait for each other, causing a standstill. In Rust, you can prevent deadlocks by acquiring locks in a consistent order, using timeouts, or preferring lock-free structures.

Deadlock example:
```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let a = Arc::new(Mutex::new(0));
    let b = Arc::new(Mutex::new(0));
    let a1 = Arc::clone(&a);
    let b1 = Arc::clone(&b);
    let h1 = thread::spawn(move || {
        let _lock_a = a1.lock().unwrap();
        let _lock_b = b1.lock().unwrap();
    });
    let a2 = Arc::clone(&a);
    let b2 = Arc::clone(&b);
    let h2 = thread::spawn(move || {
        let _lock_b = b2.lock().unwrap();
        let _lock_a = a2.lock().unwrap();
    });
    h1.join().unwrap();
    h2.join().unwrap();
}
```
Solution: Both threads should acquire locks in the same order or combine locks.

```rust
// If both threads lock 'a' then 'b', no deadlock occurs.
```
You can also use `try_lock` or timeouts to reduce deadlock risk.
