## 📘 Section: Testing and Debugging
### 🔹 Category: Writing Benchmarks with `criterion` Crate
#### ✅ Answer 847: Writing benchmarks with the `criterion` crate

The `criterion` crate is used for precise performance measurement in Rust. Since the standard library's benchmarking is unstable, `criterion` is widely used.

Example benchmark:

```rust
use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn bench_addition(c: &mut Criterion) {
    c.bench_function("add", |b| b.iter(|| black_box(2) + black_box(2)));
}

criterion_group!(benches, bench_addition);
criterion_main!(benches);
```

Results show the average execution time and variance. You can optimize slow functions and compare results to improve performance.
