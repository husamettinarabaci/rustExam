## 📘 Section: Advanced WebAssembly Topics  
### 🔹 Category: WASM Performance and Debugging  
#### ✅ Answer 787: Debugging WASM in browsers

To debug WASM in browsers, use source maps and browser developer tools. Compile Rust with the `-g` flag to include debug symbols. Browsers like Chrome and Firefox allow step-by-step inspection of WASM modules.

```rust
// Build with debug symbols
cargo build --target wasm32-unknown-unknown --features debug
```
