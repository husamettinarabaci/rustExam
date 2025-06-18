## 📘 Section: Async Patterns and Runtime Internals
### 🔹 Category: Integrating multiple async runtimes
#### ✅ Answer 639: Integrating multiple async runtimes

Sometimes you need to use more than one async runtime (e.g., `tokio` and `async-std`). This can be done by spawning tasks in each runtime and using bridges like `tokio::task::block_in_place` or `async-compat`.

Example:

```rust
use async_std::task;

fn main() {
    task::block_on(async {
        println!("Running in async-std");
        tokio::task::spawn_blocking(|| println!("Running in tokio"));
    });
}
```

Be aware of limitations: not all types are compatible across runtimes, and care must be taken to avoid deadlocks or resource contention.
