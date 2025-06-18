## 📘 Section: Async Patterns and Runtime Internals
### 🔹 Category: Implementing custom futures
#### ✅ Answer 632: Implementing custom futures

To implement a custom future, define a struct and implement the `Future` trait for it. The `poll` method drives the future to completion.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll};

struct Ready;

impl Future for Ready {
    type Output = &'static str;
    fn poll(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        Poll::Ready("done!")
    }
}

#[tokio::main]
async fn main() {
    let result = Ready.await;
    println!("{}", result);
}
```

This example shows a future that is always ready. In real use, you would store state and use the context's waker to signal readiness.
