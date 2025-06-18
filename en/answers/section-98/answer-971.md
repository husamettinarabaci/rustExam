## 📘 Section: Profiling and Performance Tuning  
### 🔹 Category: Profiling and Analysis Tools  
#### ✅ Answer 971: Analyzing with `perf` and Linux profiling tools

`perf` is used on Linux to analyze which functions in your program consume the most time. After compiling your Rust program with `--release`, you can use `perf record` and `perf report` to perform function-level analysis.

```rust
fn main() {
    let mut sum = 0u64;
    for i in 0..1_000_000_000 {
        sum = sum.wrapping_add(i);
    }
    println!("Sum: {}", sum);
}
```

In the terminal:
```
cargo build --release
perf record ./target/release/<program_name>
perf report
```
The `perf report` output will show you which functions consumed the most time.
