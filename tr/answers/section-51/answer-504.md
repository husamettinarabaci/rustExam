## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Zaman Aşımı ve tokio::time  
#### ✅ Cevap 504: tokio::time::timeout ile zaman aşımı yönetimi

`tokio::time::timeout` ile bir async işlemin belirli sürede tamamlanıp tamamlanmadığını kontrol edebilirsiniz.

```rust
use tokio::time::{timeout, Duration, sleep};

async fn slow_task() {
    sleep(Duration::from_secs(2)).await;
}

#[tokio::main]
async fn main() {
    let result = timeout(Duration::from_secs(1), slow_task()).await;
    match result {
        Ok(_) => println!("İşlem zamanında tamamlandı."),
        Err(_) => println!("Zaman aşımı!"),
    }
}
```
