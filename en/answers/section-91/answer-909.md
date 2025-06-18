## 📘 Section: Advanced Parallelism and SIMD
### 🔹 Category: Auto-vectorization and compiler flags
#### ✅ Answer 909: Auto-vectorization and compiler flags

Auto-vectorization is when the compiler automatically converts scalar operations (like a loop) into SIMD instructions. Rust's LLVM backend can do this with optimization flags.

Use `-C target-cpu=native -C opt-level=3` to enable aggressive optimizations and vectorization.

Example:

```rust
fn main() {
    let mut a = [1.0f32; 1024];
    let b = [2.0f32; 1024];
    for i in 0..1024 {
        a[i] += b[i];
    }
    println!("{}", a[0]);
}
```

Compile with:
```
cargo rustc --release -- -C target-cpu=native -C opt-level=3
```
