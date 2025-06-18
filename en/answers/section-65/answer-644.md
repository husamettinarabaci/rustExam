## 📘 Section: Performance Optimization and Profiling
### 🔹 Category: Compiler Flags and Optimization
#### ✅ Answer 644: Using `cargo bench` for benchmarking

Rust uses the `cargo bench` command for performance measurement. This command runs functions marked with the `#[bench]` attribute. Nightly Rust is required.

```rust
#![feature(test)]
extern crate test;

#[bench]
fn bench_sum(b: &mut test::Bencher) {
    b.iter(|| (0..1000).sum::<u64>());
}
```

Benchmark results show how long a function takes to run. You can compare results to optimize your code.
