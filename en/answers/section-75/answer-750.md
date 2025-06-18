## 📘 Section: Pinning and Self-Referential Types
### 🔹 Category: Explaining Why `Pin` Is Critical in Async Generators and Tasks
#### ✅ Answer 750: Explaining why `Pin` is critical in async generators and tasks

Async generators and tasks are compiled to state machines that may hold self-references. If such a type is moved in memory, internal references can become invalid, leading to undefined behavior. `Pin` ensures that once a future or generator is polled, it will not be moved, preserving safety.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll};

struct MyFuture {
    // Imagine this field holds a self-reference in a real async state machine
    data: String,
}

impl Future for MyFuture {
    type Output = String;
    fn poll(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        Poll::Ready(self.data.clone())
    }
}

fn main() {
    let mut fut = Box::pin(MyFuture { data: String::from("hello") });
    use futures::executor::block_on;
    let result = block_on(fut);
    println!("{}", result);
}
```

Without `Pin`, the future could be moved after polling, breaking safety guarantees.
