## 📘 Section: Advanced Parallelism and SIMD
### 🔹 Category: Implementing parallel algorithms with low overhead
#### ❓ Question 910: Implementing parallel algorithms with low overhead

Write a Rust function that implements a parallel map operation over a vector with minimal overhead:

- Create a vector of integers from 1 to 100,000.
- Use a parallel iterator (e.g., from `rayon`) to square each element in parallel.
- Collect the results into a new vector and print the first 10 elements.

🔧 **Task:** Use `rayon::prelude::*` and `par_iter().map()` to efficiently parallelize the computation.
