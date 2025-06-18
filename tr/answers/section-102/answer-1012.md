## 📘 Bölüm: Kanallar ve Mesaj Geçişi
### 🔹 Kategori: Yayın Kanalları ile Mesaj Yayma
#### ✅ Cevap 1012: broadcast kanalları ile mesaj yayma

Bu örnekte, `tokio::sync::broadcast` ile bir yayıncı ve iki abone oluşturulur. Yayıncı mesajları gönderir, aboneler ise tüm mesajları asenkron olarak alır ve ekrana yazdırır.

```rust
use tokio::sync::broadcast;

#[tokio::main]
async fn main() {
    let (tx, _rx) = broadcast::channel(8);

    let mut rx1 = tx.subscribe();
    let mut rx2 = tx.subscribe();

    tokio::spawn(async move {
        for i in 0..3 {
            tx.send(format!("Duyuru {}", i)).unwrap();
        }
    });

    tokio::spawn(async move {
        while let Ok(msg) = rx1.recv().await {
            println!("Abone 1 aldı: {}", msg);
        }
    });

    while let Ok(msg) = rx2.recv().await {
        println!("Abone 2 aldı: {}", msg);
    }
}
```
