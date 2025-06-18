## 📘 Section: Advanced Concurrency and Synchronization
### 🔹 Category: Lock-Free Data Structures
#### ✅ Answer 754: Understanding memory ordering and fences

Memory ordering in Rust atomic operations determines how operations are seen by other threads. The main orderings are:

- `Relaxed`: Only atomicity is guaranteed, no ordering.
- `Acquire`: Ensures subsequent reads/writes see effects before this load.
- `Release`: Ensures all previous writes are visible before this store.
- `AcqRel`: Both acquire and release effects.
- `SeqCst`: Strongest, provides a global total order.

Example:
```rust
use std::sync::atomic::{AtomicUsize, Ordering};
use std::thread;

static X: AtomicUsize = AtomicUsize::new(0);
static Y: AtomicUsize = AtomicUsize::new(0);

fn main() {
    let t1 = thread::spawn(|| {
        X.store(1, Ordering::Relaxed);
        Y.store(1, Ordering::Release);
    });
    let t2 = thread::spawn(|| {
        while Y.load(Ordering::Acquire) == 0 {}
        assert_eq!(X.load(Ordering::Relaxed), 1);
    });
    t1.join().unwrap();
    t2.join().unwrap();
}
```
Here, the `Release` store and `Acquire` load on `Y` ensure that the write to `X` is visible to the second thread. Memory fences are crucial for ensuring data consistency between threads.
