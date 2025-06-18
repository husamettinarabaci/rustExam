## 📘 Bölüm: Kanal Desenleri ve İleri Mesajlaşma  
### 🔹 Kategori: Kanal tabanlı senkronizasyon primitifleri  
#### ✅ Cevap 1107: Kanal tabanlı senkronizasyon primitifleri

Bu örnekte, bir görev kanal üzerinden sinyal gönderene kadar diğeri bekler. Bu, kanal ile senkronizasyon sağlar.

```rust
use tokio::sync::oneshot;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let (tx, rx) = oneshot::channel();
    tokio::spawn(async move {
        sleep(Duration::from_secs(1)).await;
        tx.send("done").unwrap();
    });
    println!("Waiting for signal...");
    let msg = rx.await.unwrap();
    println!("Received: {}", msg);
}
```
