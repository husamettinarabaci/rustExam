## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Async Kanallar ve mpsc  
#### ✅ Cevap 507: Async kanallar için tokio::sync::mpsc kullanımı

`tokio::sync::mpsc` ile birden fazla async görevden mesaj gönderip ana görevde bu mesajları alabilirsiniz.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(10);

    let tx1 = tx.clone();
    tokio::spawn(async move {
        tx1.send("Birinci mesaj").await.unwrap();
    });

    tokio::spawn(async move {
        tx.send("İkinci mesaj").await.unwrap();
    });

    for _ in 0..2 {
        if let Some(msg) = rx.recv().await {
            println!("Gelen: {}", msg);
        }
    }
}
```
