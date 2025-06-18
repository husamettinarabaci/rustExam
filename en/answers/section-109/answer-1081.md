## 📘 Section: Parallelism and Data-Parallel APIs  
### 🔹 Category: Using Rayon for data parallelism  
#### ✅ Answer 1081: Using Rayon for data parallelism

Rayon makes it easy to perform data parallelism in Rust. By using `par_iter()`, you can process elements of a collection in parallel. In this example, all elements are multiplied by two in parallel and the results are printed.

```rust
use rayon::prelude::*;

fn main() {
    let v = vec![1, 2, 3, 4, 5];
    let result: Vec<_> = v.par_iter().map(|x| x * 2).collect();
    println!("Result: {:?}", result);
}
```
