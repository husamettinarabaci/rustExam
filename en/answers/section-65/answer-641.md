## 📘 Section: Performance Optimization and Profiling
### 🔹 Category: Compiler Flags and Optimization
#### ✅ Answer 641: Optimization with compiler flags (`-C opt-level`)

Rust provides several compiler flags to control optimization. The `-C opt-level` flag sets the optimization level for the compiler. Values range from 0 to 3, and also include `s` and `z` for size optimizations. `cargo build --release` uses `-C opt-level=3` by default.

```rust
fn main() {
    let mut sum = 0;
    for i in 0..1_000_000 {
        sum += i;
    }
    println!("Sum: {}", sum);
}
```

To build with different optimization levels:

```bash
cargo build --release # -C opt-level=3
cargo build --release --profile release-with-opt1 # -C opt-level=1
```

You can define custom profiles in `Cargo.toml` to experiment. Higher optimization usually produces faster code but increases compile time.
