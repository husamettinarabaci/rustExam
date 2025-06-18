## 📘 Section: Profiling and Performance Tuning  
### 🔹 Category: Automated Performance Regression Testing  
#### ✅ Answer 980: Automated performance regression testing

The `criterion` crate can be used for automated performance regression testing. It records benchmark results on each run and compares them to previous results.

Add to Cargo.toml:
```toml
[dev-dependencies]
criterion = "*"
```

`benches/bench.rs`:
```rust
use criterion::{criterion_group, criterion_main, Criterion};

fn sum_benchmark(c: &mut Criterion) {
    c.bench_function("sum", |b| {
        b.iter(|| (0..1_000_000).sum::<u64>())
    });
}

criterion_group!(benches, sum_benchmark);
criterion_main!(benches);
```

In the terminal:
```
cargo bench
```
The output includes a comparative performance report with previous runs.
