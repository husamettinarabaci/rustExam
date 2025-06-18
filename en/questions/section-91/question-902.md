## 📘 Section: Advanced Parallelism and SIMD
### 🔹 Category: Writing SIMD-enabled code with `packed_simd`
#### ❓ Question 902: Writing SIMD-enabled code with `packed_simd`

Write a Rust function that uses the `packed_simd` crate to add two arrays of 8 `f32` values using SIMD instructions:

- Define two arrays of 8 `f32` numbers each.
- Use `packed_simd` to add them element-wise in a SIMD fashion.
- Print the resulting array.

🔧 **Task:** Use `packed_simd::f32x8` to perform SIMD addition of two arrays.
