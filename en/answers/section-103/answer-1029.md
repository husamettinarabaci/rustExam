## 📘 Section: Shared State and Synchronization
### 🔹 Category: Thread Coordination with Barrier
#### ✅ Answer 1029: Thread coordination with Barrier

A `Barrier` allows multiple threads to meet at a point and then proceed together. In the example below, 5 threads wait at the barrier and then continue together.

```rust
use std::sync::{Arc, Barrier};
use std::thread;

fn main() {
    let barrier = Arc::new(Barrier::new(5));
    let mut handles = vec![];

    for i in 0..5 {
        let barrier = Arc::clone(&barrier);
        handles.push(thread::spawn(move || {
            println!("Thread {} reached the barrier", i);
            barrier.wait();
            println!("Thread {} is proceeding", i);
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }
}
```
