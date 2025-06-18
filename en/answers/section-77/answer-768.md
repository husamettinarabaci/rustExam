## 📘 Section: Embedded Systems Advanced Topics
### 🔹 Category: Real-Time Operating Systems (RTOS)
#### ✅ Answer 768: Using hardware timers and watchdogs

Hardware timers generate interrupts at set intervals for time-based operations. A watchdog is a safety mechanism that must be periodically reset to prevent system lockup.

Example of starting a timer/watchdog in Rust (pseudocode):
```rust
let timer = hal::Timer::new(...);
timer.start(1_000); // 1 ms
let mut watchdog = hal::Watchdog::new(...);
watchdog.feed(); // Call periodically
```
These features ensure system safety and reliability. The watchdog resets the system if it becomes unresponsive.
