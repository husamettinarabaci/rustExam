## 📘 Section: Performance Optimization and Profiling
### 🔹 Category: Compiler Flags and Optimization
#### ✅ Answer 643: Identifying and eliminating unnecessary allocations

Unnecessary allocations in Rust often occur with dynamic structures like vectors and strings. Using functions like `Vec::with_capacity` can reduce the number of allocations.

```rust
fn main() {
    let mut v = Vec::with_capacity(1000);
    for i in 0..1000 {
        v.push(i);
    }
    println!("{}", v.len());
}
```

Tools like `valgrind`, `heaptrack`, or Rust's own profiling tools can help detect allocations. Pre-allocating capacity and avoiding unnecessary clones are recommended techniques.
