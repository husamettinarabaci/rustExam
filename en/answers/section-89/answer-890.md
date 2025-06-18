## 📘 Section: Embedded Concurrency and Real-Time Systems  
### 🔹 Category: Profiling and optimizing embedded real-time code  
#### ✅ Answer 890: Profiling and optimizing embedded real-time code

Profiling is essential for finding bottlenecks and optimizing code. Tools like semihosting, RTT, and cycle counters are commonly used.

Example: Measuring function execution time with a cycle counter:

```rust
use cortex_m::peripheral::DWT;

fn measure<F: FnOnce()>(f: F) -> u32 {
    let start = DWT::get_cycle_count();
    f();
    let end = DWT::get_cycle_count();
    end - start
}
```

This code measures the execution time of a function in cycles. The result can be logged for analysis.
