## 📘 Section: Embedded Systems Advanced Topics
### 🔹 Category: Real-Time Operating Systems (RTOS)
#### ✅ Answer 764: Power management and low-power modes

Power management in embedded systems is crucial for battery life and energy efficiency. Low-power modes allow the CPU and peripherals to operate with minimal energy.

Example of entering low-power mode in Rust (pseudocode):
```rust
// Enter low-power mode
cortex_m::asm::wfi(); // Wait For Interrupt
```
The system wakes up via an interrupt. Peripherals can be disabled or clock frequency reduced for further savings.

Low-power modes are widely used in embedded systems for energy savings and long battery life.
