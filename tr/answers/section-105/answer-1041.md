## 📘 Bölüm: Future'lar ve Async Primitifler  
### 🔹 Kategori: Future ve Async Primitifler  
#### ✅ Cevap 1041: Özel `Future` implementasyonu

Rust'ta `Future` trait'i manuel olarak implemente edilerek özel asenkron davranışlar tanımlanabilir. Aşağıda, bir sayaç tamamlandığında tamamlanan basit bir future örneği verilmiştir.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll};

struct MyFuture {
    count: u8,
}

impl Future for MyFuture {
    type Output = &'static str;
    fn poll(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        if self.count == 0 {
            Poll::Ready("Done!")
        } else {
            self.count -= 1;
            Poll::Pending
        }
    }
}

#[tokio::main]
async fn main() {
    let mut fut = MyFuture { count: 3 };
    println!("{}", fut.await);
}
```
