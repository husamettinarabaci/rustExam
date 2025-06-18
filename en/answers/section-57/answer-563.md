## 📘 Section: Low-Level Embedded Systems
### 🔹 Category: Handling interrupts and exceptions safely
#### ✅ Answer 563: Handling interrupts and exceptions safely

In embedded Rust, interrupts and exceptions are managed using the `#[interrupt]` and `#[exception]` attributes. Example:

```rust
use cortex_m_rt::{exception, interrupt};

#[interrupt]
fn TIM2() {
    // Interrupt handling code
}

#[exception]
fn HardFault(_ef: &cortex_m_rt::ExceptionFrame) -> ! {
    loop {}
}
```

This code defines an interrupt and an exception handler.
