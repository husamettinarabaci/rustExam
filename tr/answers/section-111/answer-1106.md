## 📘 Bölüm: Kanal Desenleri ve İleri Mesajlaşma  
### 🔹 Kategori: Backpressure stratejileri implementasyonu  
#### ✅ Cevap 1106: Backpressure stratejileri implementasyonu

Bu örnekte, sınırlı (bounded) kanal ile üretici, tüketici yavaşladığında otomatik olarak bekler. Bu, backpressure stratejisidir.

```rust
use tokio::sync::mpsc;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(2);
    tokio::spawn(async move {
        for i in 0..5 {
            tx.send(i).await.unwrap();
            println!("Produced: {}", i);
        }
    });
    while let Some(val) = rx.recv().await {
        println!("Consumed: {}", val);
        sleep(Duration::from_millis(200)).await;
    }
}
```
