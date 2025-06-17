## 📘 Section: Embedded Rust Foundations  
### 🔹 Category: Startup and Attributes  
#### ✅ Answer 516: Understanding `#[entry]`, `#[interrupt]`, and startup code

- `#[entry]` marks the main entry point for embedded programs (replaces `main`).
- `#[interrupt]` marks an interrupt handler function.
- Startup code (provided by `cortex-m-rt`) sets up the vector table and reset handler, initializing memory and calling the entry point.

These attributes and startup code are essential for correct embedded program execution.
