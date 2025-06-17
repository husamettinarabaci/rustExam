## 📘 Section: Embedded Rust Foundations  
### 🔹 Category: Project Setup and `no_std`  
#### ✅ Answer 511: Setting up a `no_std` embedded project with `cortex-m-rt`

To target embedded systems, you use `#![no_std]` to remove the standard library and rely on `cortex-m-rt` for runtime support. The `#[entry]` attribute marks the entry point. The project is configured for an embedded target (e.g., thumbv7em-none-eabihf).

```rust
#![no_std]
#![no_main]

use cortex_m_rt::entry;

#[entry]
fn main() -> ! {
    loop {}
}
```
