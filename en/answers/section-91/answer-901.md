## 📘 Section: Advanced Parallelism and SIMD
### 🔹 Category: Using Rayon for data parallelism
#### ✅ Answer 901: Using `rayon` for data parallelism

This solution uses the `rayon` crate to perform data parallelism. By converting the vector to a parallel iterator with `par_iter()`, the sum operation is distributed across multiple threads, improving performance for large datasets.

```rust
use rayon::prelude::*;

fn main() {
    let v: Vec<u64> = (1..=1_000_000).collect();
    let sum: u64 = v.par_iter().sum();
    println!("Sum: {}", sum);
}
```
