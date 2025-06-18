## 📘 Bölüm: Future'lar ve Async Primitifler
### 🔹 Kategori: Async primitifleri hata ayıklama
#### ✅ Cevap 1050: Async primitifleri hata ayıklama

Async future veya stream'in iç durumunu analiz etmek için `dbg!` veya `println!` ile hata ayıklama yapılabilir. Aşağıdaki örnekte, bir async future'ın adımlarını ve bir stream'in her adımda hangi değeri ürettiğini görebilirsiniz.

```rust
use tokio::time::{sleep, Duration};
use futures::stream::{self, StreamExt};

#[tokio::main]
async fn main() {
    let fut = async {
        println!("Future başlıyor");
        sleep(Duration::from_millis(100)).await;
        println!("Future bitti");
        42
    };
    let result = fut.await;
    dbg!(result);

    let s = stream::iter(vec![10, 20, 30]);
    s.for_each(|x| async move {
        dbg!(x);
    }).await;
}
```
