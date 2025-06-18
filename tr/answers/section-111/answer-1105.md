## 📘 Bölüm: Kanal Desenleri ve İleri Mesajlaşma  
### 🔹 Kategori: Yayın/desen için broadcast kanalları  
#### ✅ Cevap 1105: Yayın/desen için broadcast kanalları

Bu örnekte, `tokio::sync::broadcast` ile birden fazla alıcıya aynı anda mesaj yayınlanır. Her alıcı tüm mesajları alır.

```rust
use tokio::sync::broadcast;
use tokio::task;

#[tokio::main]
async fn main() {
    let (tx, _) = broadcast::channel(16);
    for i in 0..3 {
        let mut rx = tx.subscribe();
        task::spawn(async move {
            while let Ok(msg) = rx.recv().await {
                println!("Receiver {}: {}", i, msg);
            }
        });
    }
    for n in 0..5 {
        tx.send(format!("Message {}", n)).unwrap();
    }
}
```
