## 📘 Section: Concurrency Design Patterns  
### 🔹 Category: Thread-safe caching strategies  
#### ✅ Answer 1195: Thread-safe caching strategies

Thread-safe caches allow multiple threads to read and write data safely at the same time. In Rust, this is typically achieved with `Mutex`, `RwLock`, or atomic types.

**Simple thread-safe cache example:**
```rust
use std::collections::HashMap;
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let cache = Arc::new(Mutex::new(HashMap::new()));
    let mut handles = vec![];
    for i in 0..4 {
        let cache = Arc::clone(&cache);
        handles.push(thread::spawn(move || {
            let mut map = cache.lock().unwrap();
            map.insert(i, i * 10);
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Cache: {:?}", cache.lock().unwrap());
}
```

Thread-safe caches are necessary in multi-threaded web servers, parallel data processing, and shared resources.
