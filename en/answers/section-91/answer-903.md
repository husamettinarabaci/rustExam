## 📘 Section: Advanced Parallelism and SIMD
### 🔹 Category: Vectorizing loops manually in Rust
#### ✅ Answer 903: Vectorizing loops manually in Rust

This solution manually vectorizes the addition of two arrays by iterating over their indices and adding corresponding elements. This is a basic approach to vectorization without using SIMD intrinsics or crates.

```rust
fn main() {
    let a = [1u32; 16];
    let b = [2u32; 16];
    let mut c = [0u32; 16];
    for i in 0..16 {
        c[i] = a[i] + b[i];
    }
    println!("{:?}", c);
}
```
