## 📘 Bölüm: Async Desenler ve Runtime İç Yapısı  
### 🔹 Kategori: Async stream ve sink yazma  
#### ✅ Cevap 635: Async stream ve sink yazma

Async stream, ardışık async değerler üretmek için kullanılır. Rust'ta `futures::stream::Stream` trait'i ile kendi stream'inizi yazabilirsiniz. Sink ise veri tüketir.

```rust
use futures::stream::Stream;
use std::pin::Pin;
use std::task::{Context, Poll};

struct Counter { count: usize }

impl Stream for Counter {
    type Item = usize;
    fn poll_next(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Option<Self::Item>> {
        let me = self.get_mut();
        if me.count < 3 {
            me.count += 1;
            Poll::Ready(Some(me.count))
        } else {
            Poll::Ready(None)
        }
    }
}
```
