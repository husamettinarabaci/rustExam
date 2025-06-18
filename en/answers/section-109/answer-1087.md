## 📘 Section: Parallelism and Data-Parallel APIs  
### 🔹 Category: Combining Rayon and async code  
#### ✅ Answer 1087: Combining Rayon and async code

Rayon can be used for CPU-bound parallel computations, and the results can be collected and printed in an async function. This example demonstrates both async and parallel operations together.

```rust
use rayon::prelude::*;

#[tokio::main]
async fn main() {
    let data = vec![1, 2, 3, 4, 5];
    let results: Vec<_> = data.par_iter().map(|x| x * x).collect();
    print_results(results).await;
}

async fn print_results(results: Vec<i32>) {
    println!("Results: {:?}", results);
}
```
