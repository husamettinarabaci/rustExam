## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Atomic Types  
#### ✅ Answer 187: Using atomic types for lock-free concurrency

This example shows how to use `AtomicUsize` for lock-free concurrency.

```rust
use std::sync::Arc;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::thread;

fn main() {
    let counter = Arc::new(AtomicUsize::new(0));
    let mut handles = vec![];
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            counter.fetch_add(1, Ordering::SeqCst);
        });
        handles.push(handle);
    }
    for handle in handles {
        handle.join().unwrap();
    }
    println!("Result: {}", counter.load(Ordering::SeqCst));
}
```
