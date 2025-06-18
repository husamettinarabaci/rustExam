## 📘 Section: Synchronization Primitives Deep Dive
### 🔹 Category: Reader-writer locks and performance
#### ✅ Answer 1135: Reader-writer locks and performance

RwLock allows multiple readers or a single writer. Reads are parallel, writes are exclusive.

```rust
use std::sync::{Arc, RwLock};
use std::thread;

let data = Arc::new(RwLock::new(0));
let readers: Vec<_> = (0..5).map(|_| {
    let data = Arc::clone(&data);
    thread::spawn(move || {
        let val = data.read().unwrap();
        println!("Read: {}", *val);
    })
}).collect();
for r in readers { r.join().unwrap(); }
```
This structure provides high performance for read-heavy workloads.
