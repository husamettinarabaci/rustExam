## 📘 Section: Concurrency Patterns and Idioms  
### 🔹 Category: Building thread-safe caches  
#### ✅ Answer 1065: Building thread-safe caches

A thread-safe cache allows multiple threads to safely add and read data concurrently. In Rust, this is commonly implemented using `Arc<Mutex<HashMap<...>>>`.

```rust
use std::collections::HashMap;
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let cache = Arc::new(Mutex::new(HashMap::new()));
    let mut handles = vec![];
    for i in 0..5 {
        let cache = Arc::clone(&cache);
        handles.push(thread::spawn(move || {
            let mut map = cache.lock().unwrap();
            map.insert(i, i * 10);
        }));
    }
    for h in handles { h.join().unwrap(); }
    let map = cache.lock().unwrap();
    println!("Cache: {:?}", *map);
}
```
Here, each thread adds data to the cache, and all data is safely stored.
