## 📘 Section: Async Patterns and Runtime Internals
### 🔹 Category: Writing async streams and sinks
#### ✅ Answer 635: Writing async streams and sinks

Async streams yield values over time, similar to async iterators. The `futures` crate provides a `Stream` trait. You can implement it for your own types.

```rust
use futures::stream::Stream;
use std::pin::Pin;
use std::task::{Context, Poll};

struct Counter {
    count: usize,
}

impl Stream for Counter {
    type Item = usize;
    fn poll_next(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Option<Self::Item>> {
        if self.count < 3 {
            self.count += 1;
            Poll::Ready(Some(self.count))
        } else {
            Poll::Ready(None)
        }
    }
}
```

You can poll this stream to get values asynchronously.
