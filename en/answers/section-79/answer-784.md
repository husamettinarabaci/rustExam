## 📘 Section: Advanced WebAssembly Topics  
### 🔹 Category: WASM Performance and Debugging  
#### ✅ Answer 784: Using WASM SIMD and threads

WASM SIMD and thread support can be enabled in Rust with the appropriate target features. For SIMD, use `target-feature=+simd128`. For threads, enable `atomics` and `bulk-memory` features. These must be supported by the browser and enabled at compile time.

```rust
// Build with SIMD support
env RUSTFLAGS="-C target-feature=+simd128" cargo build --release --target wasm32-unknown-unknown
```
