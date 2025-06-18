## 📘 Section: Performance Optimization and Profiling
### 🔹 Category: Compiler Flags and Optimization
#### ✅ Answer 642: Profiling with `perf` and flamegraph

The `perf` and flamegraph tools are used to analyze the performance of Rust programs. `perf` collects raw profiling data, and flamegraph visualizes it.

```rust
fn main() {
    let mut sum = 0;
    for i in 0..1_000_000 {
        sum += i;
    }
    println!("Sum: {}", sum);
}
```

Profiling steps:

1. Build your program with `--release`.
2. `perf record ./target/release/your_program`
3. `perf script | flamegraph > flamegraph.svg`

Flamegraph helps you visually analyze which functions consume the most time.
