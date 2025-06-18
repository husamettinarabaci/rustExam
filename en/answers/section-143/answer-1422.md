## 📘 Section: Compile-Time Performance Optimization
### 🔹 Category: Parallel Compilation and Compiler Settings
#### ✅ Answer 1422: Using parallel compilation effectively

The Rust compiler and Cargo can compile independent crates and modules in parallel, utilizing all CPU cores. By default, Cargo spawns as many jobs as there are CPU cores, but you can adjust this with the `-j` or `--jobs` flag.

```bash
cargo build --jobs 4
```

Keeping dependencies small and independent helps maximize the benefits of parallel compilation.
