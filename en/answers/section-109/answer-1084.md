## 📘 Section: Parallelism and Data-Parallel APIs  
### 🔹 Category: Synchronization in parallel computations  
#### ✅ Answer 1084: Synchronization in parallel computations

Synchronization is required for shared data in parallel computations. In this example, a counter is protected by a `Mutex` and incremented in parallel using Rayon.

```rust
use rayon::prelude::*;
use std::sync::{Arc, Mutex};

fn main() {
    let counter = Arc::new(Mutex::new(0));
    (0..1000).into_par_iter().for_each(|_| {
        let mut num = counter.lock().unwrap();
        *num += 1;
    });
    println!("Counter: {}", *counter.lock().unwrap());
}
```
