## 📘 Section: Compile-Time Performance Optimization
### 🔹 Category: Build Time and Bottlenecks
#### ✅ Answer 1428: Diagnosing slow builds and bottlenecks

Common causes of slow builds include large dependencies, complex macros, excessive generics, and large crates. Use `cargo build -Z timings` and `cargo tree` to identify bottlenecks. Removing unnecessary dependencies and simplifying code can improve build times.

```bash
cargo +nightly build -Z timings
```

These tools show which steps are slowest in the build process.
