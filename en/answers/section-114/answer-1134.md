## 📘 Section: Synchronization Primitives Deep Dive
### 🔹 Category: Using `Condvar` for signaling
#### ✅ Answer 1134: Using `Condvar` for signaling

`Condvar` allows one thread to wake another. When a condition is met, waiting threads are notified.

```rust
use std::sync::{Arc, Mutex, Condvar};
use std::thread;

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
println!("Thread woke up!");
```
This example shows one thread waking another using `Condvar`.
