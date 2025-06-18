## 📘 Bölüm: Pinning ve Kendine Referanslı Tipler
### 🔹 Kategori: `Pin` ile Kendine Referanslı Future Implementasyonu
#### ✅ Cevap 748: `Pin` ile kendine referanslı future implementasyonu

Kendine referanslı bir `Future` implement etmek için pinning kullanarak struct'ın poll edildikten sonra taşınmamasını sağlamalısınız. Genellikle `pin-project` crate'i ile yapılır.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll};
use pin_project::pin_project;

#[pin_project]
struct BenimFuture {
    #[pin]
    ic: Option<u32>,
}

impl Future for BenimFuture {
    type Output = u32;
    fn poll(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        let this = self.project();
        Poll::Ready(this.ic.take().unwrap_or(0))
    }
}

fn main() {
    let mut fut = Box::pin(BenimFuture { ic: Some(42) });
    use futures::executor::block_on;
    let sonuc = block_on(fut);
    println!("Sonuç: {}", sonuc);
}
```
