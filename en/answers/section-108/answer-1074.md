## 📘 Section: Tokio Ecosystem Deep Dive  
### 🔹 Category: Timers and Intervals  
#### ✅ Answer 1074: Managing Tokio timers and intervals

Tokio provides timer utilities like `sleep` and `interval` for scheduling time-based events. These are essential for implementing delays, timeouts, and periodic tasks in async applications.

```rust
use tokio::time::{sleep, Duration, interval};

#[tokio::main]
async fn main() {
    // Delay for 1 second
    sleep(Duration::from_secs(1)).await;
    println!("Slept for 1 second");

    // Periodic interval
    let mut intv = interval(Duration::from_millis(500));
    for _ in 0..3 {
        intv.tick().await;
        println!("Interval tick");
    }
}
```
