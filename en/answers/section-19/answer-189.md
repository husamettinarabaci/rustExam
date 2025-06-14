## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Parallel Iterators  
#### ✅ Answer 189: Using parallel iterators with Rayon

The `rayon` crate makes it easy to perform parallel computations on collections.

```rust
use rayon::prelude::*;

fn main() {
    let v: Vec<i32> = (1..1_000_001).collect();
    let sum: i32 = v.par_iter().sum();
    println!("Sum: {}", sum);
}
```
