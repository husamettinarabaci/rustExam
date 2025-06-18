## 📘 Section: WASM Tooling and Ecosystem  
### 🔹 Category: WASM Debugging with Browser Extensions  
#### ✅ Answer 1435: Debugging WASM with browser extensions

Browsers like Chrome and Firefox provide built-in developer tools for WASM debugging. You can step through WASM code with source maps and inspect variables. Using unoptimized builds and correct source maps is important for effective debugging.

```rust
// For debug builds in Rust
// $ cargo build --target wasm32-unknown-unknown --debug
```
