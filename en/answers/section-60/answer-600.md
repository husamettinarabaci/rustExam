## 📘 Section: Systems Programming Mastery  
### 🔹 Category: Flamegraph and Perf Profiling  
#### ✅ Answer 600: Generating flamegraphs and visualizing CPU usage

To profile Rust code with perf and flamegraph, follow these steps:

```rust
// Example function
fn compute() {
    let mut sum = 0;
    for i in 0..1_000_000 {
        sum += i;
    }
    println!("Sum: {}", sum);
}

fn main() {
    compute();
}
```

// In the terminal:
// 1. `cargo build --release`
// 2. `perf record -g ./target/release/<binary>`
// 3. `perf script | flamegraph > flamegraph.svg`
//
// The resulting flamegraph.svg file allows you to visually analyze bottlenecks in your code.
