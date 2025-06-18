## 📘 Bölüm: Async Runtime Implementasyonları
### 🔹 Kategori: Runtime'da zamanlayıcı ve gecikme yönetimi
#### ✅ Cevap 865: Runtime'da zamanlayıcı ve gecikme yönetimi

Bu örnekte, belirli bir süre bekleyen (delay) bir future ve onu poll eden basit bir executor yazılır. Standart kütüphane dışında crate kullanılmaz.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll, RawWaker, RawWakerVTable, Waker};
use std::time::{Duration, Instant};
use std::thread;

struct Delay {
    when: Instant,
}

impl Future for Delay {
    type Output = ();
    fn poll(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        if Instant::now() >= self.when {
            Poll::Ready(())
        } else {
            Poll::Pending
        }
    }
}

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
            Poll::Pending => thread::sleep(Duration::from_millis(10)),
        }
    }
}

fn main() {
    let delay = Delay { when: Instant::now() + Duration::from_secs(1) };
    block_on(delay);
    println!("1 saniyelik gecikme tamamlandı!");
}
```
