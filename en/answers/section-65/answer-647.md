## 📘 Section: Performance Optimization and Profiling
### 🔹 Category: Compiler Flags and Optimization
#### ✅ Answer 647: Minimizing branch mispredictions and cache misses

Branch mispredictions occur when the CPU incorrectly guesses the outcome of a branch, reducing performance. Techniques include reducing branching and accessing data sequentially.

```rust
fn sum_positive(v: &[i32]) -> i32 {
    let mut sum = 0;
    for &x in v {
        // Reduce branching by flipping the condition
        sum += (x > 0) as i32 * x;
    }
    sum
}

fn main() {
    let v = vec![1, -2, 3, -4, 5];
    println!("{}", sum_positive(&v));
}
```

Sequential data access and fewer conditions help optimize for cache and branch prediction.
