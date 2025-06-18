## 📘 Bölüm: Async Hata Yönetimi
### 🔹 Kategori: Async Hata Yönetimi
#### ✅ Cevap 1060: Zaman aşımı ve iptal ile hata yönetimi

Bu örnekte bir async işlem `tokio::time::timeout` ile sınırlandırılır. Zaman aşımı durumunda hata mesajı gösterilir, işlem tamamlanırsa sonucu yazdırılır.

```rust
use tokio::time::{timeout, Duration};

async fn slow_task() -> &'static str {
    tokio::time::sleep(Duration::from_secs(2)).await;
    "Tamamlandı"
}

#[tokio::main]
async fn main() {
    match timeout(Duration::from_secs(1), slow_task()).await {
        Ok(res) => println!("Sonuç: {}", res),
        Err(_) => println!("Zaman aşımı!"),
    }
}
```
