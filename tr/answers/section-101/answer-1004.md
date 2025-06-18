## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: `tokio::select!` ile Eşzamanlı Future'lar  
#### ✅ Cevap 1004: `tokio::select!` ile eşzamanlı future'lar

Bu örnekte, iki async işlem başlatılır: biri zamanlayıcı (`tokio::time::sleep`), diğeri kanal üzerinden mesaj bekleme. `tokio::select!` ile hangisi önce tamamlarsa o işlenir. Böylece birden fazla future eşzamanlı beklenebilir.

```rust
use tokio::{sync::oneshot, time::{sleep, Duration}};

#[tokio::main]
async fn main() {
    let (tx, rx) = oneshot::channel();
    tokio::spawn(async move {
        sleep(Duration::from_secs(1)).await;
        let _ = tx.send("Zamanlayıcı tamamlandı");
    });

    tokio::select! {
        msg = rx => println!("Kanal: {}", msg.unwrap()),
        _ = sleep(Duration::from_millis(500)) => println!("Sleep tamamlandı"),
    }
}
```
