## 📘 Section: Lock-Free Data Structures
### 🔹 Category: Principles of lock-free programming
#### ✅ Answer 1179: Debugging lock-free code

This example shows a race condition when two threads update the same variable non-atomically. The output can be observed with `println!`. In real code, always use atomic types and synchronization.

```rust
use std::thread;
use std::sync::Arc;

fn main() {
    let data = Arc::new(std::cell::Cell::new(0));
    let mut handles = vec![];
    for _ in 0..2 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            for _ in 0..1000 {
                let val = data.get();
                data.set(val + 1);
            }
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Final value: {}", data.get()); // Usually not 2000!
}
```
