## 📘 Bölüm: Kanallar ve Mesaj Geçişi
### 🔹 Kategori: Tokio ile Asenkron Kanallar
#### ✅ Cevap 1011: tokio::sync::mpsc kanalları kullanımı

Bu örnekte, `tokio::sync::mpsc` ile bir gönderici ve alıcı oluşturulur. Bir görev mesajları gönderirken, diğeri asenkron olarak alır ve ekrana yazdırır.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(8);

    tokio::spawn(async move {
        for i in 0..5 {
            tx.send(format!("Mesaj {}", i)).await.unwrap();
        }
    });

    while let Some(msg) = rx.recv().await {
        println!("Aldım: {}", msg);
    }
}
```
