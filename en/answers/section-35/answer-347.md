## 📘 Section: Testing and Debugging  
### 🔹 Category: Writing Benchmarks  
#### ✅ Answer 347: Writing benchmarks with unstable `#[bench]` (nightly)

The `#[bench]` attribute is used for writing benchmarks in Rust, but it is only available on nightly with the `test` crate and the `#![feature(test)]` attribute. Benchmark functions use `b.iter(|| ...)` to measure performance. Benchmarks only work with the nightly compiler.

```rust
#![feature(test)]
extern crate test;

#[bench]
fn bench_addition(b: &mut test::Bencher) {
    b.iter(|| {
        let mut sum = 0;
        for i in 0..1000 {
            sum += i;
        }
        sum
    });
}
```

To run benchmarks:

```
cargo +nightly bench
```
