## 📘 Bölüm: Async Desenler ve Runtime İç Yapısı  
### 🔹 Kategori: Ölçeklenebilir async mimariler tasarlama  
#### ✅ Cevap 640: Ölçeklenebilir async mimariler tasarlama

Ölçeklenebilir async mimarilerde, görevler arası iletişim, yük dengeleme ve kaynak yönetimi önemlidir. `tokio`, `async-std` gibi runtime'lar ve kanallar, task spawn, worker pool gibi desenler kullanılır.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(32);
    tokio::spawn(async move {
        tx.send(42).await.unwrap();
    });
    if let Some(val) = rx.recv().await {
        println!("Gelen: {}", val);
    }
}
```
