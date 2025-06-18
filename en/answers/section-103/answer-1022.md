## 📘 Section: Shared State and Synchronization
### 🔹 Category: Using RwLock for Read and Write
#### ✅ Answer 1022: Concurrent reading and writing with RwLock

`RwLock` allows multiple threads to read data concurrently, but only one thread to write at a time. This is useful for read-heavy scenarios. In the example below, several threads read the value while others update it.

```rust
use std::sync::{Arc, RwLock};
use std::thread;

fn main() {
    let data = Arc::new(RwLock::new(0));
    let mut handles = vec![];

    // Readers
    for _ in 0..5 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let val = data.read().unwrap();
            println!("Read value: {}", *val);
        }));
    }

    // Writers
    for _ in 0..2 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut val = data.write().unwrap();
            *val += 1;
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final value: {}", *data.read().unwrap());
}
```
