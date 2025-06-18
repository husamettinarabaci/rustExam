## 📘 Section: Profiling and Performance Tuning  
### 🔹 Category: Reducing Binary Size  
#### ✅ Answer 974: Reducing size with LTO and binary stripping

LTO (Link Time Optimization) allows for further code optimization during compilation and can reduce binary size. The `strip` command removes the symbol table for additional reduction.

```toml
# In Cargo.toml
[profile.release]
lto = true
```

In the terminal:
```
cargo build --release
ls -lh target/release/<program_name>
strip target/release/<program_name>
ls -lh target/release/<program_name>
```
Compare the file sizes before and after to see the reduction.
