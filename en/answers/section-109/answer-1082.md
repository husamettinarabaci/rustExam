## 📘 Section: Parallelism and Data-Parallel APIs  
### 🔹 Category: Parallel iterators and combinators  
#### ✅ Answer 1082: Parallel iterators and combinators

With Rayon, you can use `par_iter()` to filter and sum elements in parallel. This example filters elements greater than 10 and computes their sum in parallel.

```rust
use rayon::prelude::*;

fn main() {
    let v = vec![5, 12, 8, 20, 15];
    let sum: i32 = v.par_iter().filter(|&&x| x > 10).sum();
    println!("Sum: {}", sum);
}
```
