## 📘 Section: Testing and Debugging Concurrent Code  
### 🔹 Category: Stress Testing  
#### ✅ Answer 1143: Stress testing concurrent data structures

A stress test can be performed by having many threads add data to a shared vector. `Arc<Mutex<Vec<_>>>` ensures data integrity. The test checks the final length.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

let data = Arc::new(Mutex::new(Vec::new()));
let mut handles = vec![];
for i in 0..100 {
    let data = Arc::clone(&data);
    handles.push(thread::spawn(move || {
        data.lock().unwrap().push(i);
    }));
}
for handle in handles {
    handle.join().unwrap();
}
assert_eq!(data.lock().unwrap().len(), 100);
```
