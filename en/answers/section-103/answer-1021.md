## 📘 Section: Shared State and Synchronization
### 🔹 Category: Using Arc<Mutex<T>> for Shared Mutable State
#### ✅ Answer 1021: Using Arc<Mutex<T>> for shared mutable state

`Arc<Mutex<T>>` allows multiple threads to safely share and mutate data. `Arc` (Atomic Reference Counted) enables multiple ownership across threads, while `Mutex` ensures only one thread can access the data at a time. This pattern is commonly used for shared, mutable state in concurrent Rust programs.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Result: {}", *counter.lock().unwrap());
}
```
