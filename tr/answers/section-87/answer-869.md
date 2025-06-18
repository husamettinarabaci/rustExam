## 📘 Bölüm: Async Runtime Implementasyonları
### 🔹 Kategori: Async runtime'lara bloklayıcı kod entegrasyonu
#### ✅ Cevap 869: Async runtime'lara bloklayıcı kod entegrasyonu

Bu örnekte, async bir future içinde bloklayıcı bir kod (örneğin sleep) çalıştırılır ve bunun executor üzerindeki etkisi gösterilir. Standart kütüphane dışında crate kullanılmaz.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll, RawWaker, RawWakerVTable, Waker};
use std::thread;
use std::time::Duration;

struct BlockingFuture {
    polled: bool,
}

impl Future for BlockingFuture {
    type Output = ();
    fn poll(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        if !self.polled {
            println!("Bloklayıcı kod başlatılıyor...");
            thread::sleep(Duration::from_secs(1));
            self.polled = true;
            Poll::Pending
        } else {
            Poll::Ready(())
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
    let mut fut = BlockingFuture { polled: false };
    let waker = dummy_waker();
    let mut ctx = Context::from_waker(&waker);
    let mut fut = unsafe { Pin::new_unchecked(&mut fut) };
    loop {
        match fut.as_mut().poll(&mut ctx) {
            Poll::Ready(()) => {
                println!("Future tamamlandı!");
                break;
            }
            Poll::Pending => println!("Future henüz tamamlanmadı..."),
        }
    }
}
```
