## 📘 Section: WASM Performance and Debugging
### 🔹 Category: WASM Debugging
#### ✅ Answer 1373: Using source maps for debugging WASM

Source maps allow you to map WASM code back to the original Rust lines in the browser. Enable source map support when building with `wasm-pack` or `trunk`.

```sh
wasm-pack build --dev
# or with trunk
trunk build --dev
```

- In browser devtools, you can see Rust files under the "Sources" tab.
- Errors and panics can be traced directly to your Rust code.
