## 📘 Section: Embedded Concurrency and Real-Time Systems  
### 🔹 Category: Managing shared resources without OS support  
#### ✅ Answer 885: Managing shared resources without OS support

In bare-metal systems, shared resources are prone to race conditions and data inconsistency. Critical sections and atomic operations help mitigate these risks.

Example of incrementing a counter in a critical section:

```rust
use cortex_m::interrupt;
static mut COUNTER: u32 = 0;

fn increment() {
    interrupt::free(|_| unsafe {
        COUNTER += 1;
    });
}
```

`interrupt::free` disables interrupts, allowing safe access to the counter and preventing race conditions.
