## 📘 Section: Lock-Free Data Structures
### 🔹 Category: Principles of lock-free programming
#### ✅ Answer 1180: Performance testing lock-free algorithms

This example increments an atomic counter with different thread counts and measures the time taken. The results show the scalability of the lock-free algorithm.

```rust
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use std::thread;
use std::time::Instant;

fn main() {
    let thread_counts = [1, 2, 4, 8];
    let increments = 1_000_000;
    for &threads in &thread_counts {
        let counter = Arc::new(AtomicUsize::new(0));
        let start = Instant::now();
        let mut handles = vec![];
        for _ in 0..threads {
            let counter = Arc::clone(&counter);
            handles.push(thread::spawn(move || {
                for _ in 0..(increments / threads) {
                    counter.fetch_add(1, Ordering::Relaxed);
                }
            }));
        }
        for h in handles { h.join().unwrap(); }
        let duration = start.elapsed();
        println!("Threads: {}, Time: {:?}, Final: {}", threads, duration, counter.load(Ordering::Relaxed));
    }
}
```
