## 📘 Section: Advanced Parallelism and SIMD
### 🔹 Category: Implementing parallel algorithms with low overhead
#### ✅ Answer 910: Implementing parallel algorithms with low overhead

This solution uses `rayon`'s parallel iterators to efficiently map a function (squaring) over a large vector. The computation is distributed across threads with minimal overhead.

```rust
use rayon::prelude::*;

fn main() {
    let v: Vec<u32> = (1..=100_000).collect();
    let squares: Vec<u32> = v.par_iter().map(|x| x * x).collect();
    println!("{:?}", &squares[..10]);
}
```
