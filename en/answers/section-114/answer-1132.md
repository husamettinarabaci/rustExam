## 📘 Section: Synchronization Primitives Deep Dive
### 🔹 Category: Understanding Mutex internals
#### ✅ Answer 1132: Understanding Mutex internals

A mutex allows only one thread to access a resource at a time. Internally, it uses a flag or atomic variable to track the lock. When a thread acquires the lock, others must wait.

```rust
use std::sync::{Mutex, Arc};
use std::thread;

let data = Arc::new(Mutex::new(0));
let mut handles = vec![];
for _ in 0..10 {
    let data = Arc::clone(&data);
    handles.push(thread::spawn(move || {
        let mut num = data.lock().unwrap();
        *num += 1;
    }));
}
for h in handles { h.join().unwrap(); }
println!("Result: {}", *data.lock().unwrap());
```
This example shows how a mutex prevents data races and ensures safe access.
