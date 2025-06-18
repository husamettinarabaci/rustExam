## 📘 Section: Shared State and Synchronization
### 🔹 Category: Preventing Deadlocks with Mutex
#### ✅ Answer 1025: How to prevent deadlocks with Mutex?

Deadlocks occur when threads wait on each other for resources. To prevent this, always acquire locks in the same order. In the example below, both resources are always locked in the same order, so no deadlock occurs.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let a = Arc::new(Mutex::new(0));
    let b = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..2 {
        let (a, b) = (Arc::clone(&a), Arc::clone(&b));
        handles.push(thread::spawn(move || {
            let _lock1 = a.lock().unwrap();
            let _lock2 = b.lock().unwrap();
            // Access resources
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }
}
```
