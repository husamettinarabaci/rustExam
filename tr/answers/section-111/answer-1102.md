## 📘 Bölüm: Kanal Desenleri ve İleri Mesajlaşma  
### 🔹 Kategori: Sınırlı ve sınırsız kanallar kullanımı  
#### ✅ Cevap 1102: Sınırlı ve sınırsız kanallar kullanımı

Bu örnekte, `tokio::sync::mpsc` ile hem sınırlı (bounded) hem de sınırsız (unbounded) kanal kullanımı gösterilmektedir. Sınırlı kanalda kapasite dolduğunda gönderici bekler.

```rust
use tokio::sync::mpsc;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    // Sınırlı kanal
    let (tx, mut rx) = mpsc::channel(2);
    for i in 0..4 {
        let tx = tx.clone();
        tokio::spawn(async move {
            tx.send(i).await.unwrap();
            println!("Bounded sent: {}", i);
        });
    }
    sleep(Duration::from_millis(100)).await;
    while let Some(val) = rx.recv().await {
        println!("Bounded received: {}", val);
    }

    // Sınırsız kanal
    let (tx, mut rx) = mpsc::unbounded_channel();
    for i in 0..4 {
        tx.send(i).unwrap();
        println!("Unbounded sent: {}", i);
    }
    for _ in 0..4 {
        if let Some(val) = rx.recv().await {
            println!("Unbounded received: {}", val);
        }
    }
}
```
