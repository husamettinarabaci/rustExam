## 📘 Section: Embedded Concurrency and Real-Time Systems  
### 🔹 Category: Designing concurrency models for embedded Rust  
#### ✅ Answer 881: Designing concurrency models for embedded Rust

In embedded Rust, you can use cooperative, preemptive, or event-driven concurrency models. Cooperative tasks yield control voluntarily, preemptive tasks are scheduled by a timer, and event-driven models react to interrupts or events.

Example: Event-driven concurrency with RTIC (Real-Time Interrupt-driven Concurrency):

```rust
// Add rtic and cortex-m-rtic to Cargo.toml
#[rtic::app(device = stm32f4xx_hal::pac, peripherals = true)]
mod app {
    #[task]
    fn led_blink(_cx: led_blink::Context) {
        // Toggle LED
    }
    #[task(binds = EXTI0)]
    fn on_button(_cx: on_button::Context) {
        // Triggered on button press
    }
}
```

RTIC provides event-driven concurrency. In cooperative models, tasks are run in a loop and yield control explicitly.
