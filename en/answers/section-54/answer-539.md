## 📘 Section: WebAssembly and Frontend with Leptos/Yew
### 🔹 Category: Static Hosting and WASM Integration
#### ✅ Answer 539: Integrating WebAssembly output in static hosting

Rust-compiled WASM output is usually found in a `pkg/` or `dist/` folder. For static site integration:

- Upload the WASM file and JS glue code to your server.
- In your HTML, include the JS file with `<script type="module">`.
- The JS code loads and initializes the WASM module.

Example HTML:

```html
<script type="module">
  import init from './pkg/my_wasm_app.js';
  init();
</script>
```
