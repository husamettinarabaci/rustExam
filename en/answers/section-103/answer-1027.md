## 📘 Section: Shared State and Synchronization
### 🔹 Category: Shared HashMap with Arc and RwLock
#### ✅ Answer 1027: Shared HashMap with Arc<RwLock<HashMap<K, V>>>

`Arc<RwLock<HashMap<K, V>>>` allows multiple threads to safely read from and write to the same HashMap. Readers can access concurrently, while writers have exclusive access.

```rust
use std::collections::HashMap;
use std::sync::{Arc, RwLock};
use std::thread;

fn main() {
    let map = Arc::new(RwLock::new(HashMap::new()));
    let mut handles = vec![];

    // Writers
    for i in 0..3 {
        let map = Arc::clone(&map);
        handles.push(thread::spawn(move || {
            let mut m = map.write().unwrap();
            m.insert(format!("key{}", i), i);
        }));
    }

    // Readers
    for _ in 0..2 {
        let map = Arc::clone(&map);
        handles.push(thread::spawn(move || {
            let m = map.read().unwrap();
            println!("Read: {:?}", *m);
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final HashMap: {:?}", *map.read().unwrap());
}
```
