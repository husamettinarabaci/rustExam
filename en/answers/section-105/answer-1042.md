## 📘 Section: Futures and Async Primitives
### 🔹 Category: Using Pin and Unpin in Async Code
#### ✅ Answer 1042: Using `Pin` and `Unpin` in async code

The `Pin` type prevents a value from being moved in memory. The `Unpin` trait indicates that a type can be safely moved. Most simple types are automatically `Unpin`, but self-referential futures require `Pin`. When you pin a future with `Pin<Box<T>>`, it cannot be moved.

```rust
use std::pin::Pin;
use std::future::Future;

struct MyFuture {
    // ...
}

impl Future for MyFuture {
    type Output = i32;
    fn poll(self: Pin<&mut Self>, _cx: &mut std::task::Context<'_>) -> std::task::Poll<Self::Output> {
        std::task::Poll::Ready(42)
    }
}

fn main() {
    let fut = MyFuture {};
    // MyFuture is Unpin by default, so it can be moved even when pinned.
    let mut pinned = Box::pin(fut);
    // pinned: Pin<Box<MyFuture>> cannot be moved out.
    // let moved = *pinned; // ERROR: cannot move out of a pinned value.
    assert!(std::mem::needs_drop::<Pin<Box<MyFuture>>>());
}
```
