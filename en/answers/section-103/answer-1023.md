## 📘 Section: Shared State and Synchronization
### 🔹 Category: Atomic Types for Counters
#### ✅ Answer 1023: Thread-safe counter with AtomicUsize

`AtomicUsize` allows multiple threads to safely increment a counter without locks, using atomic operations. This is efficient for simple counters in concurrent scenarios.

```rust
use std::sync::Arc;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::thread;

fn main() {
    let counter = Arc::new(AtomicUsize::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            counter.fetch_add(1, Ordering::SeqCst);
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Result: {}", counter.load(Ordering::SeqCst));
}
```
