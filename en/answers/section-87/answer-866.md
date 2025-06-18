## 📘 Section: Async Runtime Implementations
### 🔹 Category: Task-local storage management
#### ✅ Answer 866: Task-local storage management

This example simulates a simple task-local storage mechanism where each future can access its own local data. No external crates are used.

```rust
use std::cell::RefCell;
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll, RawWaker, RawWakerVTable, Waker};

thread_local! {
    static TASK_LOCAL: RefCell<Option<u32>> = RefCell::new(None);
}

struct TaskLocalFuture {
    value: u32,
    polled: bool,
}

impl Future for TaskLocalFuture {
    type Output = u32;
    fn poll(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        if !self.polled {
            TASK_LOCAL.with(|cell| *cell.borrow_mut() = Some(self.value));
            self.polled = true;
            Poll::Pending
        } else {
            let val = TASK_LOCAL.with(|cell| cell.borrow().unwrap());
            Poll::Ready(val)
        }
    }
}

fn dummy_waker() -> Waker {
    fn no_op(_: *const ()) {}
    let vtable = &RawWakerVTable::new(no_op, no_op, no_op, no_op);
    let raw = RawWaker::new(std::ptr::null(), vtable);
    unsafe { Waker::from_raw(raw) }
}

fn main() {
    let mut fut = TaskLocalFuture { value: 42, polled: false };
    let waker = dummy_waker();
    let mut ctx = Context::from_waker(&waker);
    let mut fut = unsafe { Pin::new_unchecked(&mut fut) };
    loop {
        match fut.as_mut().poll(&mut ctx) {
            Poll::Ready(val) => {
                println!("Task-local value: {}", val);
                break;
            }
            Poll::Pending => {}
        }
    }
}
```
