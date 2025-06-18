## 📘 Section: WASM Performance and Debugging
### 🔹 Category: WASM Startup Latency
#### ✅ Answer 1374: Reducing startup latency in WASM apps

To reduce startup latency:
- Minimize WASM file size (use "release" builds, code minification).
- Remove unnecessary dependencies.
- Use techniques like lazy loading or streaming compilation.

```sh
wasm-pack build --release
```

- Server-side compression (gzip, brotli) is also helpful.
