## 📘 Section: Advanced Concurrency and Synchronization
### 🔹 Category: Lock-Free Data Structures
#### ✅ Answer 755: Using `RwLock` for optimized read access

`RwLock` allows multiple threads to read data concurrently, but only one thread to write at a time. In read-heavy workloads, this improves performance by not blocking readers.

```rust
use std::sync::{Arc, RwLock};
use std::thread;

fn main() {
    let data = Arc::new(RwLock::new(0));
    let mut handles = vec![];
    // Reader threads
    for _ in 0..5 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let val = data.read().unwrap();
            println!("Read value: {}", *val);
        }));
    }
    // Writer thread
    {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut val = data.write().unwrap();
            *val += 1;
            println!("Wrote value: {}", *val);
        }));
    }
    for h in handles { h.join().unwrap(); }
}
```

`RwLock` enables parallel reads, blocking only during writes. This is a major advantage for applications with many more reads than writes.
