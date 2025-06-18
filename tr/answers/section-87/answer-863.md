## 📘 Bölüm: Async Runtime Implementasyonları
### 🔹 Kategori: Görev zamanlama ve polling mekanizmaları
#### ✅ Cevap 863: Görev zamanlama ve polling mekanizmaları

Bu örnekte, birden fazla async future'ı sırayla poll eden ve tamamlandıklarında çıktı veren basit bir executor yazıyoruz. Her future bir vektörde tutulur ve poll edilerek tamamlanana kadar döngüde tutulur.

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
                        println!("Görev {} tamamlandı!", i);
                    }
                    Poll::Pending => {}
                }
            }
        }
    }
}

async fn task(id: usize) {
    println!("Görev {} başladı", id);
}

fn main() {
    let futures = vec![task(1), task(2), task(3)];
    run_all(futures);
}
```
