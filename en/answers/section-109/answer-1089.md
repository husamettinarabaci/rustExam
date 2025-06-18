## 📘 Section: Parallelism and Data-Parallel APIs  
### 🔹 Category: Profiling parallel workloads  
#### ✅ Answer 1089: Profiling parallel workloads

You can measure the execution time of parallel operations to analyze performance. In this example, the duration of a parallel sum using Rayon is measured.

```rust
use rayon::prelude::*;
use std::time::Instant;

fn main() {
    let v: Vec<u64> = (0..1_000_000).collect();
    let start = Instant::now();
    let sum: u64 = v.par_iter().sum();
    let duration = start.elapsed();
    println!("Sum: {}, Duration: {:?}", sum, duration);
}
```
