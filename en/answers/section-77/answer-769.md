## 📘 Section: Embedded Systems Advanced Topics
### 🔹 Category: Real-Time Operating Systems (RTOS)
#### ✅ Answer 769: Embedded debugging techniques

Debugging embedded systems uses serial output, LED status indicators, and hardware debuggers.

Example in Rust:
```rust
// Serial output
writeln!(serial, "Value: {}", value).ok();
// LED on
led.set_high().ok();
```
Tools like `gdb`, `probe-rs`, and `defmt` are also used. Consider timing and side effects when debugging embedded code.
