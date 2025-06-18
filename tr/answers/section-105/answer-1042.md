## 📘 Bölüm: Future'lar ve Async Primitifler
### 🔹 Kategori: Pin ve Unpin ile Async Kod
#### ✅ Cevap 1042: Async kodda `Pin` ve `Unpin` kullanımı

`Pin` türü, bir değerin bellekte taşınmasını önler. `Unpin` trait'i ise bir tipin güvenle taşınabileceğini belirtir. Çoğu basit tip için `Unpin` otomatik olarak uygulanır, ancak kendine referanslı future'lar gibi durumlarda `Pin` gereklidir. `Pin<Box<T>>` ile bir future sabitlenirse, artık taşınamaz.

```rust
use std::pin::Pin;
use std::future::Future;

struct MyFuture {
    // ...
}

impl Future for MyFuture {
    type Output = i32;
    fn poll(self: Pin<&mut Self>, _cx: &mut std::task::Context<'_>) -> std::task::Poll<Self::Output> {
        std::task::Poll::Ready(42)
    }
}

fn main() {
    let fut = MyFuture {};
    // MyFuture otomatik olarak Unpin'dir, bu yüzden Pin<Box<T>> ile taşınabilir.
    let mut pinned = Box::pin(fut);
    // pinned: Pin<Box<MyFuture>> artık taşınamaz.
    // let moved = *pinned; // HATA: Pin ile sabitlenen değer taşınamaz.
    assert!(std::mem::needs_drop::<Pin<Box<MyFuture>>>());
}
```
