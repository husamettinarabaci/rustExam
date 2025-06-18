## 📘 Section: Embedded Systems Advanced Topics
### 🔹 Category: Real-Time Operating Systems (RTOS)
#### ✅ Answer 762: Writing interrupt service routines (ISRs) safely

An interrupt service routine (ISR) is a special function that responds to hardware events. In Rust:
- Be careful with shared data (avoid race conditions).
- Keep ISRs short and avoid blocking operations.
- Use `#[interrupt]` or similar attributes.

Example (with RTIC or cortex-m-rt):
```rust
#[interrupt]
fn EXTI0() {
    // Called when a GPIO pin changes
    // Keep code short and safe
}
```
ISRs should be as short and side-effect free as possible. Protect critical data with atomic or lock-free methods.
