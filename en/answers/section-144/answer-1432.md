## 📘 Section: WASM Tooling and Ecosystem  
### 🔹 Category: WASM Packaging and Publishing  
#### ✅ Answer 1432: Packaging WASM modules with wasm-pack

`wasm-pack` is used to convert Rust projects into WASM modules and publish them as npm packages. The `wasm-pack build` command compiles the project, and the output files (in the pkg folder) are used in web projects or distributed via npm.

```rust
// Build with wasm-pack
// $ wasm-pack build --target web
```
