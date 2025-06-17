## 📘 Section: Embedded Rust Foundations  
### 🔹 Category: Interrupts and Input  
#### ✅ Answer 514: Handling button input with interrupts

Configure a GPIO pin as input and enable its interrupt. In the interrupt handler, toggle an LED. Example (pseudo-code, as actual code depends on HAL):

```rust
// ...setup code...
#[interrupt]
fn EXTI0() {
    // Toggle LED
    // Clear interrupt flag
}
```

You must configure the interrupt in your HAL and link the handler.
