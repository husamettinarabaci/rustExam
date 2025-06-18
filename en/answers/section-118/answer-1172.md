## 📘 Section: Lock-Free Data Structures
### 🔹 Category: Implementing atomic counters and flags
#### ✅ Answer 1172: Implementing atomic counters and flags

Atomic counters and flags in Rust can be safely used across threads.

Example:
```rust
use std::sync::atomic::{AtomicUsize, AtomicBool, Ordering};

let counter = AtomicUsize::new(0);
counter.fetch_add(1, Ordering::SeqCst);

let flag = AtomicBool::new(false);
flag.store(true, Ordering::SeqCst);
```
Here, `counter` is incremented atomically and `flag` is updated atomically.
