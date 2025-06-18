## 📘 Section: DSL Optimization and Code Generation  
### 🔹 Category: Using memoization in DSL interpreters  
#### ✅ Answer 1366: Using memoization in DSL interpreters

Memoization stores results of expensive computations to avoid repeating them. In Rust, this can be implemented with a `HashMap`.

```rust
use std::collections::HashMap;

fn fib(n: u32, cache: &mut HashMap<u32, u32>) -> u32 {
    if let Some(&v) = cache.get(&n) {
        return v;
    }
    let result = if n < 2 { n } else { fib(n-1, cache) + fib(n-2, cache) };
    cache.insert(n, result);
    result
}

fn main() {
    let mut cache = HashMap::new();
    println!("fib(10) = {}", fib(10, &mut cache));
}
```
This technique improves interpreter performance.
