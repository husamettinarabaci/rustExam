## 📘 Section: Performance Optimization and Profiling
### 🔹 Category: Compiler Flags and Optimization
#### ✅ Answer 649: Preventing lock contention in multithreaded code

Lock contention occurs when multiple threads try to acquire the same lock, reducing performance. Solutions include narrowing lock scope, using lock-free data structures, or partitioning data.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let data = Arc::new(Mutex::new(vec![0; 10]));
    let mut handles = vec![];
    for i in 0..10 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut v = data.lock().unwrap();
            v[i] = i;
        }));
    }
    for h in handles { h.join().unwrap(); }
}
```

Reducing lock scope and minimizing shared data helps prevent lock contention.
