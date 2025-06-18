## 📘 Section: Async Runtime Implementations
### 🔹 Category: Task scheduling and polling mechanisms
#### ✅ Answer 863: Task scheduling and polling mechanisms

This example implements a simple executor that polls multiple async futures in sequence and prints output when each task completes. Each future is stored in a vector and polled until completion.

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

fn run_all<F: Future<Output = ()>>(mut futures: Vec<F>) {
    let waker = dummy_waker();
    let mut ctx = Context::from_waker(&waker);
    let mut pins: Vec<_> = futures.iter_mut().map(|f| unsafe { Pin::new_unchecked(f) }).collect();
    let mut completed = vec![false; pins.len()];
    while completed.iter().any(|&c| !c) {
        for (i, fut) in pins.iter_mut().enumerate() {
            if !completed[i] {
                match fut.as_mut().poll(&mut ctx) {
                    Poll::Ready(()) => {
                        completed[i] = true;
                        println!("Task {} completed!", i);
                    }
                    Poll::Pending => {}
                }
            }
        }
    }
}

async fn task(id: usize) {
    println!("Task {} started", id);
}

fn main() {
    let futures = vec![task(1), task(2), task(3)];
    run_all(futures);
}
```
