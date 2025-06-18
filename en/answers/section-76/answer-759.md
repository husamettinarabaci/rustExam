## 📘 Section: Advanced Concurrency and Synchronization
### 🔹 Category: Lock-Free Data Structures
#### ✅ Answer 759: Using condition variables for thread signaling

A condition variable (`Condvar`) allows a thread to wait for a condition and another thread to signal when the condition is met.

```rust
use std::sync::{Arc, Mutex, Condvar};
use std::thread;

fn main() {
    let pair = Arc::new((Mutex::new(false), Condvar::new()));
    let pair2 = Arc::clone(&pair);
    thread::spawn(move || {
        let (lock, cvar) = &*pair2;
        let mut started = lock.lock().unwrap();
        *started = true;
        cvar.notify_one();
    });
    let (lock, cvar) = &*pair;
    let mut started = lock.lock().unwrap();
    while !*started {
        started = cvar.wait(started).unwrap();
    }
    println!("Thread signal received!");
}
```

`Condvar` enables efficient coordination and signaling between threads, waking up waiting threads only when needed.
