## 📘 Section: Parallelism and Data-Parallel APIs  
### 🔹 Category: Parallel collection processing  
#### ✅ Answer 1086: Parallel collection processing

Parallel processing provides performance benefits for large collections. With Rayon, you can compute the square of each element in a large vector in parallel.

```rust
use rayon::prelude::*;

fn main() {
    let v: Vec<u32> = (0..1_000_000).collect();
    let squares: Vec<u32> = v.par_iter().map(|x| x * x).collect();
    println!("First 5 squares: {:?}", &squares[..5]);
}
```
