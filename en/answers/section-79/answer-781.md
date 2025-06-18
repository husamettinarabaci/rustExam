## 📘 Section: Advanced WebAssembly Topics  
### 🔹 Category: WASM Performance and Debugging  
#### ✅ Answer 781: Optimizing WASM binary size

Optimizing WASM binary size leads to faster load times and reduced bandwidth usage. In Rust, use the `--release` flag, enable LTO (Link Time Optimization), and apply tools like `wasm-opt` to minimize output. Removing unused functions and dependencies is also crucial.

```rust
// In Cargo.toml under [profile.release], add lto = true
// Build:
cargo build --release --target wasm32-unknown-unknown
// Optimize with wasm-opt:
wasm-opt -Oz -o output_optimized.wasm output.wasm
```
