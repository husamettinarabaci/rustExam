## 📘 Section: Testing and Debugging Concurrent Code  
### 🔹 Category: Benchmarking Concurrent Workloads  
#### ✅ Answer 1148: Benchmarking concurrent workloads

To benchmark a concurrent operation, use `std::time::Instant` to measure elapsed time. The results help evaluate performance.

```rust
use std::thread;
use std::sync::{Arc, Mutex};
use std::time::Instant;

let counter = Arc::new(Mutex::new(0));
let now = Instant::now();
let mut handles = vec![];
for _ in 0..10 {
    let counter = Arc::clone(&counter);
    handles.push(thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        *num += 1;
    }));
}
for h in handles { h.join().unwrap(); }
println!("Elapsed: {:?}", now.elapsed());
```
