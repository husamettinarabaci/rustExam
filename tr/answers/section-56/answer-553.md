## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: Görev öncelikleri ve iptal yönetimi  
#### ✅ Cevap 553: Görev öncelikleri ve iptal yönetimi

Bu soruda, async görevlerin önceliklendirilmesi ve iptal edilmesi konularını öğrendiniz. `tokio::sync::oneshot` kanalı ile bir görevi iptal edebilir ve görevlerin tamamlanma veya iptal durumunu yönetebilirsiniz.

```rust
use tokio::sync::oneshot;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let (tx, rx) = oneshot::channel();
    let high_priority = tokio::spawn(async {
        sleep(Duration::from_millis(300)).await;
        println!("High priority task finished");
    });
    let low_priority = tokio::spawn(async move {
        tokio::select! {
            _ = sleep(Duration::from_secs(1)) => println!("Low priority task finished"),
            _ = rx => println!("Low priority task cancelled"),
        }
    });
    // Cancel the low priority task after 400ms
    sleep(Duration::from_millis(400)).await;
    let _ = tx.send(());
    let _ = high_priority.await;
    let _ = low_priority.await;
}
```
