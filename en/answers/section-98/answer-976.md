## 📘 Section: Profiling and Performance Tuning  
### 🔹 Category: Cache Optimization and Data Locality  
#### ✅ Answer 976: Cache optimization and data locality

Cache-friendly algorithms benefit from sequential memory access, making better use of the CPU cache. Below is an example comparing row-major (cache-friendly) and column-major (cache-unfriendly) matrix addition.

```rust
const N: usize = 1024;

fn row_major_sum(a: &[[f64; N]; N], b: &[[f64; N]; N]) -> [[f64; N]; N] {
    let mut c = [[0.0; N]; N];
    for i in 0..N {
        for j in 0..N {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    c
}

fn col_major_sum(a: &[[f64; N]; N], b: &[[f64; N]; N]) -> [[f64; N]; N] {
    let mut c = [[0.0; N]; N];
    for j in 0..N {
        for i in 0..N {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    c
}
```

Row-major addition is usually faster because sequential memory access improves cache efficiency.
