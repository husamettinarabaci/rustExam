## 📘 Section: Advanced Parallelism and SIMD
### 🔹 Category: Profiling SIMD performance benefits
#### ❓ Question 905: Profiling SIMD performance benefits

Write a Rust program to compare the performance of a SIMD addition (using `packed_simd`) and a regular loop addition for two large arrays:

- Create two large arrays (e.g., 1,000,000 `f32` values each).
- Add them element-wise using a regular loop and measure the time taken.
- Add them using SIMD with `packed_simd` and measure the time taken.
- Print both timings for comparison.

🔧 **Task:** Use `std::time::Instant` for timing and compare SIMD vs regular addition.
