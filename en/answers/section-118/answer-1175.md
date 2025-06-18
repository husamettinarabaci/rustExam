## 📘 Section: Lock-Free Data Structures
### 🔹 Category: Memory ordering guarantees
#### ✅ Answer 1175: Memory ordering guarantees

Rust provides several memory ordering types for atomic operations:
- `Relaxed`: Only atomicity, no ordering guarantees.
- `Acquire`/`Release`: Control read/write ordering.
- `SeqCst`: Strongest, provides global ordering for all operations.

Example:
```rust
use std::sync::atomic::{AtomicUsize, Ordering};
let a = AtomicUsize::new(0);
a.store(1, Ordering::Release);
let v = a.load(Ordering::Acquire);
```
Here, `Release` and `Acquire` are used to control ordering.
