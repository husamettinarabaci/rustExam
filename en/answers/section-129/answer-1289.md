## 📘 Section: Fullstack WASM Applications
### 🔹 Category: WASM Packaging and Deployment
#### ✅ Answer 1289: Packaging and deploying WASM applications

This task demonstrates building, packaging, and deploying a Rust WASM application. Use `wasm-pack` or `trunk` for building, place output files in a suitable directory, and deploy via a static server or CDN.

```rust
// Build and package with wasm-pack:
// wasm-pack build --release --target web

// Build with trunk:
// trunk build --release

// Place output files (WASM, JS, HTML) in /dist or /pkg.
// Example static server deployment:
// python3 -m http.server 8080 -d dist
```
