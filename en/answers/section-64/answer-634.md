## 📘 Section: Async Patterns and Runtime Internals
### 🔹 Category: Task scheduling and waker mechanics
#### ✅ Answer 634: Task scheduling and waker mechanics

Rust's async runtime uses the `Waker` type to notify executors when a future is ready to make progress. When a future cannot make progress, it stores the waker and returns `Poll::Pending`. The executor polls futures and uses the waker to wake them up when they're ready.

Example:

```rust
use std::future::Future;
use std::task::{Context, Poll, Waker};

// In a real executor, the waker would notify the runtime to poll the task again.
// Custom wakers can be built for advanced use cases.
```

The interaction between futures, wakers, and the executor enables efficient, event-driven async execution.
