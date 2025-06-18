## 📘 Section: Parallelism and Data-Parallel APIs  
### 🔹 Category: Designing parallel pipelines  
#### ✅ Answer 1083: Designing parallel pipelines

Rayon allows you to chain parallel map, filter, and sum operations. In this example, each element is doubled, filtered if greater than 10, and then summed in parallel.

```rust
use rayon::prelude::*;

fn main() {
    let v = vec![3, 6, 8, 10, 12];
    let sum: i32 = v.par_iter()
        .map(|x| x * 2)
        .filter(|&x| x > 10)
        .sum();
    println!("Result: {}", sum);
}
```
