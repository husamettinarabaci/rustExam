## 📘 Section: DSL Optimization and Code Generation  
### 🔹 Category: Optimizing recursive DSL functions  
#### ✅ Answer 1362: Optimizing recursive DSL functions

Rust does not automatically apply tail-call optimization (TCO). To avoid stack overflows and improve performance, recursive functions can be rewritten as iterative loops.

```rust
// Recursive (risk of stack overflow)
fn factorial_rec(n: u64) -> u64 {
    if n == 0 { 1 } else { n * factorial_rec(n - 1) }
}

// Iterative (more efficient)
fn factorial_iter(mut n: u64) -> u64 {
    let mut result = 1;
    while n > 0 {
        result *= n;
        n -= 1;
    }
    result
}
```
The iterative approach is safer and faster for large inputs.
