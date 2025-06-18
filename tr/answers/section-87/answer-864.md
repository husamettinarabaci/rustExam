## 📘 Bölüm: Async Runtime Implementasyonları
### 🔹 Kategori: Future ve waker implementasyonu
#### ✅ Cevap 864: Future ve waker implementasyonu

Bu örnekte, bir sayaç gibi davranan ve birkaç poll çağrısından sonra tamamlanan özel bir Future tipi tanımlanır. Waker mekanizması, poll fonksiyonunda kullanılır.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll, RawWaker, RawWakerVTable, Waker};

struct StepFuture {
    steps: u8,
}

impl Future for StepFuture {
    type Output = &'static str;
    fn poll(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        if self.steps == 0 {
            Poll::Ready("Tamamlandı!")
        } else {
            self.steps -= 1;
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

fn main() {
    let mut fut = StepFuture { steps: 3 };
    let waker = dummy_waker();
    let mut ctx = Context::from_waker(&waker);
    let mut fut = unsafe { Pin::new_unchecked(&mut fut) };
    loop {
        match fut.as_mut().poll(&mut ctx) {
            Poll::Ready(msg) => {
                println!("Future tamamlandı: {}", msg);
                break;
            }
            Poll::Pending => println!("Future henüz tamamlanmadı..."),
        }
    }
}
```
