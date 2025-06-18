## 📘 Section: Systems-Level Design with Rust  
### 🔹 Category: Signal and Process Control  
#### ✅ Answer 546: Handling signals and process control

Signal handling is easy in Rust using the `signal-hook` crate. Here is an example for SIGINT (Ctrl+C).

```rust
use signal_hook::consts::SIGINT;
use signal_hook::flag;
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Arc;

fn main() {
    let term = Arc::new(AtomicBool::new(false));
    flag::register(SIGINT, Arc::clone(&term)).unwrap();
    println!("Press Ctrl+C to exit.");
    while !term.load(Ordering::Relaxed) {
        std::thread::sleep(std::time::Duration::from_millis(100));
    }
    println!("SIGINT received, exiting.");
}
```
