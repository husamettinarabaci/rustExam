## 📘 Section: Embedded Concurrency and Real-Time Systems  
### 🔹 Category: Debugging concurrency bugs on embedded devices  
#### ✅ Answer 886: Debugging concurrency bugs on embedded devices

Concurrency bugs manifest as unexpected data changes, deadlocks, or inconsistencies. Tools like semihosting, RTT, and logging can help debug these issues.

Example using assert to detect a race condition:

```rust
use core::sync::atomic::{AtomicUsize, Ordering};
static COUNTER: AtomicUsize = AtomicUsize::new(0);

fn increment() {
    let prev = COUNTER.fetch_add(1, Ordering::SeqCst);
    // Error if value is out of expected range
    assert!(prev < 100, "Race condition detected!");
}
```

This code triggers an assertion if an unexpected counter value is detected.
