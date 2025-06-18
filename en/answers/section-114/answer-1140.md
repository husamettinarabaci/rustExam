## 📘 Section: Synchronization Primitives Deep Dive
### 🔹 Category: Profiling synchronization overhead
#### ✅ Answer 1140: Profiling synchronization overhead

The overhead of synchronization primitives can be measured with profiling tools like `perf` or `cargo bench`.

```rust
// Example for profiling:
// $ cargo bench
// $ perf record -- cargo run
```
Mark critical sections in code to measure performance.
