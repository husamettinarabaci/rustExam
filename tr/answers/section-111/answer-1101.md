## 📘 Bölüm: Kanal Desenleri ve İleri Mesajlaşma  
### 🔹 Kategori: Kanallarla güvenilir mesajlaşma implementasyonu  
#### ✅ Cevap 1101: Kanallarla güvenilir mesajlaşma implementasyonu

Bu örnekte, birden fazla üretici ve tüketici arasında `tokio::sync::mpsc` ile güvenilir ve sıralı mesaj iletimi sağlanır. Her mesaj sıralı olarak alınır ve kaybolmaz.

```rust
use tokio::sync::mpsc;
use tokio::task;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(10);
    for i in 0..3 {
        let tx = tx.clone();
        task::spawn(async move {
            for j in 0..5 {
                tx.send(format!("Producer {}: message {}", i, j)).await.unwrap();
            }
        });
    }
    drop(tx);
    while let Some(msg) = rx.recv().await {
        println!("Received: {}", msg);
    }
}
```
