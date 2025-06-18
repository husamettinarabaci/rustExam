## 📘 Section: Advanced WebAssembly Topics  
### 🔹 Category: WASM Performance and Debugging  
#### ✅ Answer 790: Integrating WASM with frontend frameworks

To integrate WASM with frontend frameworks, connect the Rust-compiled WASM module to the framework via JavaScript. Use `wasm-bindgen` and `wasm-pack` to generate JS APIs. Frameworks like Yew and Leptos run directly on WASM.

```rust
// Example integration with Yew
yew::start_app::<Model>();
```
