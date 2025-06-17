## 📘 Section: Testing and Debugging  
### 🔹 Category: Writing Benchmarks  
#### ❓ Question 347: Writing benchmarks with unstable `#[bench]` (nightly)

Write a Rust benchmark function that does the following:

- Use the `#[bench]` attribute to create a benchmark function.
- Use `b.iter(|| ...)` inside the function to repeat an operation.
- Note that you must use nightly Rust and the `test` crate to run benchmarks.

🔧 **Task:** Write a benchmark test that measures the performance of a function using nightly Rust and `#[bench]`.
