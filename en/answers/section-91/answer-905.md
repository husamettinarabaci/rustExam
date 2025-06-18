## 📘 Section: Advanced Parallelism and SIMD
### 🔹 Category: Profiling SIMD performance benefits
#### ✅ Answer 905: Profiling SIMD performance benefits

This solution compares the performance of SIMD addition (using `packed_simd`) and a regular loop. `std::time::Instant` is used for timing. SIMD is expected to be faster for large arrays due to parallel processing.

```rust
use packed_simd::f32x8;
use std::time::Instant;

fn main() {
    let n = 1_000_000;
    let a = vec![1.0f32; n];
    let b = vec![2.0f32; n];
    let mut c = vec![0.0f32; n];

    let start = Instant::now();
    for i in 0..n {
        c[i] = a[i] + b[i];
    }
    let duration_loop = start.elapsed();

    let start = Instant::now();
    for i in (0..n).step_by(8) {
        let va = f32x8::from_slice_unaligned(&a[i..]);
        let vb = f32x8::from_slice_unaligned(&b[i..]);
        let vc = va + vb;
        vc.write_to_slice_unaligned(&mut c[i..]);
    }
    let duration_simd = start.elapsed();

    println!("Loop: {:?}, SIMD: {:?}", duration_loop, duration_simd);
}
```
