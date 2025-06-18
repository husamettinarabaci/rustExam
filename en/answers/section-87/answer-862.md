## 📘 Section: Async Runtime Implementations
### 🔹 Category: Async runtime architecture
#### ✅ Answer 862: Building a minimal async runtime from scratch

This example shows how to write a very basic executor that manually polls Rust's `Future` trait. No external crates are used. A simple waker and polling loop are implemented to drive an async function to completion.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll, RawWaker, RawWakerVTable, Waker};

fn dummy_waker() -> Waker {
    fn no_op(_: *const ()) {}
    let vtable = &RawWakerVTable::new(no_op, no_op, no_op, no_op);
    let raw = RawWaker::new(std::ptr::null(), vtable);
    unsafe { Waker::from_raw(raw) }
}

fn block_on<F: Future>(mut fut: F) -> F::Output {
    let waker = dummy_waker();
    let mut ctx = Context::from_waker(&waker);
    let mut fut = unsafe { Pin::new_unchecked(&mut fut) };
    loop {
        match fut.as_mut().poll(&mut ctx) {
            Poll::Ready(val) => return val,
            Poll::Pending => {},
        }
    }
}

async fn hello_async() -> u32 {
    42
}

fn main() {
    let result = block_on(hello_async());
    println!("Result: {}", result);
}
```
