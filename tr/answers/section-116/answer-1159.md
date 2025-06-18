## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Görev koordinasyonu için async kanallar
#### ✅ Cevap 1159: Görev koordinasyonu için async kanallar

Bu soruda, async görevler arasında mesajlaşma için async kanal kullanımı gösterilmiştir. `tokio::sync::mpsc` ile görevler arası veri aktarımı sağlanabilir.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(4);
    for i in 0..3 {
        let tx = tx.clone();
        tokio::spawn(async move {
            tx.send(format!("Message from task {}", i)).await.unwrap();
        });
    }
    drop(tx); // Tüm göndericiler kapatılınca döngü biter
    while let Some(msg) = rx.recv().await {
        println!("Received: {}", msg);
    }
}
```
