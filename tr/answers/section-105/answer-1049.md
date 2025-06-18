## 📘 Bölüm: Future'lar ve Async Primitifler
### 🔹 Kategori: Efficient polling of async tasks
#### ✅ Cevap 1049: Efficient polling of async tasks

Birden fazla async future'ı verimli şekilde poll etmek için `futures::future::join_all` kullanılabilir. Bu fonksiyon, tüm future'ların tamamlanmasını bekler ve sonuçları toplu olarak döndürür.

```rust
use futures::future::join_all;
use tokio::time::{sleep, Duration};

async fn work(n: u64) -> u64 {
    sleep(Duration::from_millis(n * 100)).await;
    n * n
}

#[tokio::main]
async fn main() {
    let futures = (1..=5).map(work);
    let results = join_all(futures).await;
    println!("Sonuçlar: {:?}", results); // [1, 4, 9, 16, 25]
}
```
