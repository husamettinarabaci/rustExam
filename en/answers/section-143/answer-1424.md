## 📘 Section: Compile-Time Performance Optimization
### 🔹 Category: Macro Expansion and Analysis
#### ✅ Answer 1424: Profiling macro expansions

Macro expansion is the process of transforming macros into code during compilation, and complex macros can slow down builds. You can analyze macro expansion time with `cargo build -Z timings` or `cargo +nightly build -Z timings`. Reduce unnecessary macro usage and keep macros simple for best performance.

```bash
cargo +nightly build -Z timings
```

This command shows which macros or crates are slowing down the build.
