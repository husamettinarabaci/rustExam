## 📘 Section: WASM Performance and Debugging
### 🔹 Category: WASM Profiling
#### ✅ Answer 1371: Profiling WASM binaries with browser devtools

You can analyze the performance of WASM modules using the "Performance" or "Profiler" tab in browser developer tools. These tools let you see function calls, CPU usage, and bottlenecks.

```rust
// Example Rust code for WASM (with wasm-bindgen):
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn intensive_task() {
    let mut sum = 0;
    for i in 0..10_000_000 {
        sum += i;
    }
    // You can see the duration of this function in the profiler
}
```

To profile:
- Start your app and begin recording in the "Performance" tab.
- Trigger the WASM function.
- Stop recording and analyze the results.
