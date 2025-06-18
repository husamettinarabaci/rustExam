## 📘 Section: Systems Programming Advanced Topics  
### 🔹 Category: SIMD and Explicit Vectorization  
#### ✅ Answer 796: Using SIMD and explicit vectorization

SIMD can be enabled in Rust with `std::arch` or crates like `packed_simd`. Example using `std::arch`:

```rust
#[cfg(target_arch = "x86_64")]
use std::arch::x86_64::*;

fn sum_simd(a: &[f32]) -> f32 {
    unsafe {
        let mut sum = _mm_setzero_ps();
        for chunk in a.chunks_exact(4) {
            let vals = _mm_loadu_ps(chunk.as_ptr());
            sum = _mm_add_ps(sum, vals);
        }
        let mut out = [0.0; 4];
        _mm_storeu_ps(out.as_mut_ptr(), sum);
        out.iter().sum()
    }
}
```
SIMD accelerates numeric computations but requires careful handling.
