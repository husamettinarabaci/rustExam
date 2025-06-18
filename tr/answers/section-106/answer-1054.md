## 📘 Bölüm: Async Hata Yönetimi
### 🔹 Kategori: Async Hata Yönetimi
#### ✅ Cevap 1054: Async görevlerde özel hata yönetimi

Bu örnekte birden fazla async görev başlatılır ve her birinin hatası özel olarak işlenir. Hatalar merkezi bir noktada toplanır ve raporlanır.

```rust
use tokio::task;

async fn may_fail(id: u32) -> Result<(), &'static str> {
    if id % 2 == 0 {
        Ok(())
    } else {
        Err("Task failed!")
    }
}

#[tokio::main]
async fn main() {
    let handles = (0..4).map(|i| {
        task::spawn(async move {
            match may_fail(i).await {
                Ok(_) => println!("Task {} succeeded", i),
                Err(e) => println!("Task {} error: {}", i, e),
            }
        })
    });
    futures::future::join_all(handles).await;
}
```
