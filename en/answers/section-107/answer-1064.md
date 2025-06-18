## 📘 Section: Concurrency Patterns and Idioms  
### 🔹 Category: Coordinating concurrent tasks with barriers  
#### ✅ Answer 1064: Coordinating concurrent tasks with barriers

A barrier is a synchronization primitive that makes multiple threads wait until all have reached a certain point before continuing. In Rust, you can use `std::sync::Barrier`.

```rust
use std::sync::{Arc, Barrier};
use std::thread;

fn main() {
    let barrier = Arc::new(Barrier::new(3));
    let mut handles = vec![];
    for i in 0..3 {
        let c = Arc::clone(&barrier);
        handles.push(thread::spawn(move || {
            println!("Thread {} reached the barrier", i);
            c.wait();
            println!("Thread {} continues", i);
        }));
    }
    for h in handles {
        h.join().unwrap();
    }
}
```
In this example, all three threads wait at the barrier and then continue together.
