## 📘 Bölüm: Async Runtime Implementasyonları
### 🔹 Kategori: Runtime kaynak yönetimi ve temizliği
#### ✅ Cevap 868: Runtime kaynak yönetimi ve temizliği

Bu örnekte, bir async future tamamlandığında ilgili kaynağın (örneğin bir sayaç) Drop trait'i ile otomatik olarak temizlendiği gösterilir. Standart kütüphane dışında crate kullanılmaz.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll, RawWaker, RawWakerVTable, Waker};

struct Resource {
    id: u32,
}

impl Drop for Resource {
    fn drop(&mut self) {
        println!("Resource {} temizlendi!", self.id);
    }
}

struct ResourceFuture {
    resource: Option<Resource>,
    polled: bool,
}

impl Future for ResourceFuture {
    type Output = ();
    fn poll(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        if !self.polled {
            self.polled = true;
            Poll::Pending
        } else {
            // Kaynak future tamamlanınca drop edilecek
            self.resource.take();
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
    let mut fut = ResourceFuture { resource: Some(Resource { id: 1 }), polled: false };
    let waker = dummy_waker();
    let mut ctx = Context::from_waker(&waker);
    let mut fut = unsafe { Pin::new_unchecked(&mut fut) };
    loop {
        match fut.as_mut().poll(&mut ctx) {
            Poll::Ready(()) => {
                println!("Future tamamlandı!");
                break;
            }
            Poll::Pending => {}
        }
    }
}
```
