## 📘 Section: Concurrency Patterns and Idioms  
### 🔹 Category: Managing shared state with atomics  
#### ✅ Answer 1066: Managing shared state with atomics

Atomic types allow multiple threads to safely operate on shared data without race conditions. In Rust, `AtomicUsize` can be used to manage counters in a thread-safe way.

```rust
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use std::thread;

fn main() {
    let counter = Arc::new(AtomicUsize::new(0));
    let mut handles = vec![];
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            for _ in 0..1000 {
                counter.fetch_add(1, Ordering::SeqCst);
            }
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Counter: {}", counter.load(Ordering::SeqCst));
}
```
In this example, 10 threads increment the counter a total of 10,000 times safely.
