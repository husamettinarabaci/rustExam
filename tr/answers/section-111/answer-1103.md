## 📘 Bölüm: Kanal Desenleri ve İleri Mesajlaşma  
### 🔹 Kategori: Mesaj toplama ve gruplama  
#### ✅ Cevap 1103: Mesaj toplama ve gruplama

Bu örnekte, birden fazla üreticiden gelen mesajlar bir tüketici tarafından toplanır ve her 3 mesajda bir topluca işlenir.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(10);
    for i in 0..6 {
        let tx = tx.clone();
        tokio::spawn(async move {
            tx.send(i).await.unwrap();
        });
    }
    drop(tx);
    let mut buffer = Vec::new();
    while let Some(msg) = rx.recv().await {
        buffer.push(msg);
        if buffer.len() == 3 {
            println!("Batch: {:?}", buffer);
            buffer.clear();
        }
    }
    if !buffer.is_empty() {
        println!("Batch: {:?}", buffer);
    }
}
```
