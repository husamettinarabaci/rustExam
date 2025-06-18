## 📘 Section: Embedded Concurrency and Real-Time Systems  
### 🔹 Category: Real-time scheduling and priorities  
#### ✅ Answer 883: Real-time scheduling and priorities

In real-time systems, schedulers ensure tasks run at specific times or according to priority. Static priorities are fixed, while dynamic priorities can change at runtime.

Below is an RTIC example with two tasks of different priorities:

```rust
#[rtic::app(device = stm32f4xx_hal::pac, peripherals = true)]
mod app {
    #[task(priority = 2)]
    fn high_priority(_cx: high_priority::Context) {
        // High-priority task
    }
    #[task(priority = 1)]
    fn low_priority(_cx: low_priority::Context) {
        // Low-priority task
    }
}
```

Here, `high_priority` runs before `low_priority`. RTIC provides priority-based scheduling.
