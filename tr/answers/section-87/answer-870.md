## 📘 Bölüm: Async Runtime Implementasyonları
### 🔹 Kategori: Async runtime'ları profil etme ve hata ayıklama
#### ✅ Cevap 870: Async runtime'ları profil etme ve hata ayıklama

Bu örnekte, her future'ın poll edilme sayısını takip eden ve tamamlandığında bunu yazdıran bir mekanizma gösterilir. Standart kütüphane dışında crate kullanılmaz.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll, RawWaker, RawWakerVTable, Waker};

struct CountedFuture {
    polls: u32,
    max: u32,
}

impl Future for CountedFuture {
    type Output = u32;
    fn poll(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        self.polls += 1;
        if self.polls >= self.max {
            Poll::Ready(self.polls)
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

fn main() {
    let mut fut = CountedFuture { polls: 0, max: 5 };
    let waker = dummy_waker();
    let mut ctx = Context::from_waker(&waker);
    let mut fut = unsafe { Pin::new_unchecked(&mut fut) };
    loop {
        match fut.as_mut().poll(&mut ctx) {
            Poll::Ready(count) => {
                println!("Future tamamlandı, toplam poll sayısı: {}", count);
                break;
            }
            Poll::Pending => {}
        }
    }
}
```
