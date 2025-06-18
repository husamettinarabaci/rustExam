## 📘 Bölüm: Pinning ve Kendine Referanslı Tipler
### 🔹 Kategori: `Pin`'in Async Jeneratörler ve Görevlerde Neden Kritik Olduğunu Açıklama
#### ✅ Cevap 750: `Pin`'in async jeneratörler ve görevlerde neden kritik olduğunu açıklama

Async jeneratörler ve görevler, kendine referanslı olabilen durum makinelerine derlenir. Böyle bir tip bellekte taşınırsa, iç referanslar geçersiz hale gelir ve tanımsız davranış oluşur. `Pin`, bir future veya jeneratör poll edildikten sonra taşınmayacağını garanti ederek güvenliği sağlar.

```rust
use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll};

struct BenimFuture {
    // Gerçek bir async state machine'de bu alan kendine referans tutabilir
    veri: String,
}

impl Future for BenimFuture {
    type Output = String;
    fn poll(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        Poll::Ready(self.veri.clone())
    }
}

fn main() {
    let mut fut = Box::pin(BenimFuture { veri: String::from("merhaba") });
    use futures::executor::block_on;
    let sonuc = block_on(fut);
    println!("{}", sonuc);
}
```

`Pin` olmadan, future poll edildikten sonra taşınabilir ve bu güvenlik garantilerini bozar.
