## 📘 Bölüm: Kanallar ve Mesaj Geçişi
### 🔹 Kategori: Görev Koordinasyonu için Kanallar
#### ✅ Cevap 1017: Görev koordinasyonu için kanallar

Bu örnekte, iki görev arasında koordinasyon için bir kanal kullanılır. Bir görev sinyal gönderir, diğeri alır ve ekrana yazdırır.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(1);

    tokio::spawn(async move {
        tx.send("Hazır!").await.unwrap();
    });

    if let Some(msg) = rx.recv().await {
        println!("Koordinasyon mesajı: {}", msg);
    }
}
```
