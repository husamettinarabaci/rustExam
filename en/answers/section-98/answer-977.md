## 📘 Section: Profiling and Performance Tuning  
### 🔹 Category: Analyzing Binary Bloat  
#### ✅ Answer 977: Analyzing binary bloat with `cargo-bloat`

`cargo-bloat` shows which functions and modules take up the most space in a Rust binary. Example installation and usage:

In the terminal:
```
cargo install cargo-bloat
cargo bloat --release
```
The output lists the largest functions and modules. This helps you identify unnecessary code and reduce binary size.
