## 📘 Section: Shared State and Synchronization
### 🔹 Category: Shared Vector with Arc and Mutex
#### ✅ Answer 1026: Shared vector with Arc<Mutex<Vec<T>>>

`Arc<Mutex<Vec<T>>>` allows multiple threads to safely access and modify a vector. Each thread locks the vector, pushes an element, and releases the lock.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let vec = Arc::new(Mutex::new(Vec::new()));
    let mut handles = vec![];

    for i in 0..5 {
        let vec = Arc::clone(&vec);
        handles.push(thread::spawn(move || {
            let mut v = vec.lock().unwrap();
            v.push(i);
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Vector: {:?}", *vec.lock().unwrap());
}
```
