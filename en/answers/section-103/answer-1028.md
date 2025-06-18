## 📘 Section: Shared State and Synchronization
### 🔹 Category: Using Condition Variables with Mutex
#### ✅ Answer 1028: Thread synchronization with Condvar

A `Condvar` (condition variable) allows a thread to wait until a condition is met, and another thread to signal that condition. In the example below, one thread waits while the other notifies it.

```rust
use std::sync::{Arc, Mutex, Condvar};
use std::thread;

fn main() {
    let pair = Arc::new((Mutex::new(false), Condvar::new()));
    let pair2 = Arc::clone(&pair);

    // Waiting thread
    let waiter = thread::spawn(move || {
        let (lock, cvar) = &*pair2;
        let mut started = lock.lock().unwrap();
        while !*started {
            started = cvar.wait(started).unwrap();
        }
        println!("Condition met, proceeding.");
    });

    // Signaling thread
    let (lock, cvar) = &*pair;
    let mut started = lock.lock().unwrap();
    *started = true;
    cvar.notify_one();

    waiter.join().unwrap();
}
```
