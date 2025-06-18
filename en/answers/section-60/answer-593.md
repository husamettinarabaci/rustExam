## 📘 Section: Systems Programming Mastery  
### 🔹 Category: Thread-Safe Caches  
#### ✅ Answer 593: Implementing thread-safe caches

Thread-safe caches in Rust are typically built using Mutex or RwLock. Here is a simple cache example using Mutex:

```rust
use std::collections::HashMap;
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let cache = Arc::new(Mutex::new(HashMap::new()));
    let mut handles = vec![];
    for i in 0..10 {
        let cache = Arc::clone(&cache);
        handles.push(thread::spawn(move || {
            let mut map = cache.lock().unwrap();
            map.insert(i, i * 10);
        }));
    }
    for h in handles {
        h.join().unwrap();
    }
    let map = cache.lock().unwrap();
    println!("Cache: {:?}", *map);
}
```
