## 📘 Section: Advanced Parallelism and SIMD
### 🔹 Category: Using Rayon for data parallelism
#### ❓ Question 901: Using `rayon` for data parallelism

Write a Rust program that demonstrates data parallelism using the `rayon` crate:

- Create a vector of integers from 1 to 1,000,000.
- Use `rayon`'s parallel iterators to compute the sum of all elements in parallel.
- Print the result to the terminal.

🔧 **Task:** Use `rayon::prelude::*` and `par_iter()` to perform a parallel sum over a large vector.
