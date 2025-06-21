## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Smart Pointer Performance Comparison  
#### ✅ Answer 279: Comparing performance of Box, Rc, and Arc

This solution benchmarks the read performance of a large vector wrapped in `Box`, `Rc`, and `Arc`. `Box` provides single ownership, `Rc` enables reference counting for single-threaded scenarios, and `Arc` allows thread-safe reference counting. The performance differences are due to the overhead of reference counting and thread safety.

```rust
use std::rc::Rc;
use std::sync::Arc;
use std::time::Instant;

fn main() {
    let data: Vec<i64> = (0..100_000).collect();

    let boxed = Box::new(data.clone());
    let rc = Rc::new(data.clone());
    let arc = Arc::new(data.clone());

    let now = Instant::now();
    let sum: i64 = boxed.iter().sum();
    println!("Box sum: {}, elapsed: {:?}", sum, now.elapsed());

    let now = Instant::now();
    let sum: i64 = rc.iter().sum();
    println!("Rc sum: {}, elapsed: {:?}", sum, now.elapsed());

    let now = Instant::now();
    let sum: i64 = arc.iter().sum();
    println!("Arc sum: {}, elapsed: {:?}", sum, now.elapsed());
}
```
