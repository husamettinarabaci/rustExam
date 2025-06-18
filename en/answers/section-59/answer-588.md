## 📘 Section: Frontend Framework Deep Dive  
### 🔹 Category: Debugging Frontend Rust with Source Maps  
#### ✅ Answer 588: Debugging frontend Rust with source maps

Source maps map compiled WASM code back to the original Rust source. This allows you to debug in the browser and see Rust lines directly. In Yew/Leptos, enable source maps with `trunk` or `wasm-pack`.

```toml
# With Trunk
dist = "dist"
[build]
release = false
source-maps = true
```

The benefit is that error messages and stack traces correspond to your Rust code.
