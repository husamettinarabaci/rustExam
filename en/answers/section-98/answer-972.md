## 📘 Section: Profiling and Performance Tuning  
### 🔹 Category: Profiling and Analysis Tools  
#### ✅ Answer 972: Visualizing CPU usage with Flamegraph

The `flamegraph` tool visually shows which functions in a program consume the most CPU time. You can use `cargo flamegraph` while running your Rust program to generate an SVG file.

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
cargo install flamegraph
cargo flamegraph
```
Open the generated `flamegraph.svg` in a browser to analyze it.
