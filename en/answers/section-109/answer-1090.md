## 📘 Section: Parallelism and Data-Parallel APIs  
### 🔹 Category: Writing scalable parallel applications  
#### ✅ Answer 1090: Writing scalable parallel applications

With Rayon or crossbeam, you can write scalable parallel applications for large data sets. In this example, the sum of a large vector is computed in parallel.

```rust
use rayon::prelude::*;

fn main() {
    let v: Vec<u64> = (0..10_000_000).collect();
    let sum: u64 = v.par_iter().sum();
    println!("Sum: {}", sum);
}
```
