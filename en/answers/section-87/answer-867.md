## 📘 Section: Async Runtime Implementations
### 🔹 Category: Coordination in multi-threaded executors
#### ✅ Answer 867: Coordination in multi-threaded executors

This example simulates a simple multi-threaded executor where each thread polls a future and prints output when it completes. No external crates are used.

```rust
use std::future::Future;
use std::pin::Pin;
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll, RawWaker, RawWakerVTable, Waker};
use std::thread;

fn dummy_waker() -> Waker {
    fn no_op(_: *const ()) {}
    let vtable = &RawWakerVTable::new(no_op, no_op, no_op, no_op);
    let raw = RawWaker::new(std::ptr::null(), vtable);
    unsafe { Waker::from_raw(raw) }
}

fn run_in_thread<F>(mut fut: F, id: usize)
where
    F: Future<Output = String> + Send + 'static,
{
    thread::spawn(move || {
        let waker = dummy_waker();
        let mut ctx = Context::from_waker(&waker);
        let mut fut = unsafe { Pin::new_unchecked(&mut fut) };
        loop {
            match fut.as_mut().poll(&mut ctx) {
                Poll::Ready(val) => {
                    println!("Thread {}: {}", id, val);
                    break;
                }
                Poll::Pending => {}
            }
        }
    });
}

async fn task(id: usize) -> String {
    format!("Future {} completed!", id)
}

fn main() {
    for i in 0..3 {
        run_in_thread(task(i), i);
    }
    thread::sleep(std::time::Duration::from_millis(100)); // Wait for threads to finish
}
```
