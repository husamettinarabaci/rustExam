## 📘 Section: Parallelism and Data-Parallel APIs  
### 🔹 Category: Preventing data races in parallel algorithms  
#### ✅ Answer 1088: Preventing data races in parallel algorithms

To prevent data races, synchronization primitives like Mutex are used. In this example, parallel threads safely access shared data using a Mutex.

```rust
use rayon::prelude::*;
use std::sync::{Arc, Mutex};

fn main() {
    let data = Arc::new(Mutex::new(vec![]));
    (0..10).into_par_iter().for_each(|i| {
        let mut v = data.lock().unwrap();
        v.push(i);
    });
    println!("Data: {:?}", *data.lock().unwrap());
}
```
