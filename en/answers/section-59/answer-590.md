## 📘 Section: Frontend Framework Deep Dive  
### 🔹 Category: Packaging and Deploying Rust WASM Apps  
#### ✅ Answer 590: Packaging and deploying Rust WASM apps

Rust WASM apps are typically packaged with `trunk` or `wasm-pack`. Use `trunk build --release` for production-optimized output. Deploy the static files to a web server.

```sh
trunk build --release
# or
wasm-pack build --release
```

For production, minimize code, disable source maps, and ensure security settings are correct.
