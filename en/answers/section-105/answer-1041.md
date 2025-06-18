## 📘 Section: Futures and Async Primitives  
### 🔹 Category: Futures and Async Primitives  
#### ✅ Answer 1041: Writing a custom `Future` implementation

In Rust, you can manually implement the `Future` trait to define custom asynchronous behavior. Below is a simple example of a future that completes after a counter reaches zero.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll};

struct MyFuture {
    count: u8,
}

impl Future for MyFuture {
    type Output = &'static str;
    fn poll(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        if self.count == 0 {
            Poll::Ready("Done!")
        } else {
            self.count -= 1;
            Poll::Pending
        }
    }
}

#[tokio::main]
async fn main() {
    let mut fut = MyFuture { count: 3 };
    println!("{}", fut.await);
}
```
