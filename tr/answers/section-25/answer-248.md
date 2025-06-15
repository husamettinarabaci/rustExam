## 📘 Bölüm: Closure ve Sahiplik
### 🔹 Kategori: Closure ve Async Fonksiyonlar
#### ✅ Cevap 248: Closure ve async fonksiyonlar

Rust'ta closure'lar async fonksiyonlara parametre olarak verilebilir. Closure'ın kendisi de async ise, `Fn() -> impl Future` şeklinde kullanılabilir. Aşağıda `tokio` ile bir örnek verilmiştir:

```rust
use tokio::runtime::Runtime;
use std::future::Future;

async fn closure_ile_calistir<F, Fut>(f: F)
where
    F: Fn() -> Fut,
    Fut: Future<Output = ()>,
{
    f().await;
}

#[tokio::main]
async fn main() {
    let closure = || async {
        println!("Async closure'dan merhaba!");
    };
    closure_ile_calistir(closure).await;
}
```

Bu örnekte, `closure_ile_calistir` adında bir async fonksiyon, parametre olarak bir closure alır ve bu closure'ı await ile çalıştırır. Async kodu çalıştırmak için `tokio` çalışma zamanı kullanılmıştır.
