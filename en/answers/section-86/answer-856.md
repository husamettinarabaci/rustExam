## 📘 Section: Memory Safety and Static Analysis
### 🔹 Category: Symbolic Execution for Rust Programs
#### ✅ Answer 856: Using symbolic execution for Rust programs

Symbolic execution runs a program with symbolic inputs instead of concrete values, analyzing all possible execution paths. Tools like MIRI and KLEE can be used in Rust.

Example MIRI usage:

```sh
cargo +nightly miri test
```

The advantage is early detection of potential bugs and memory safety issues. The limitation is path explosion in complex programs.
