## 📘 Bölüm: Kanallar ve Mesaj Geçişi
### 🔹 Kategori: Tek Yanıt için Oneshot Kanalları
#### ✅ Cevap 1015: Tek yanıt için oneshot kanalları

Bu örnekte, `tokio::sync::oneshot` ile bir görevden diğerine tek bir mesaj gönderilir. Gönderici ve alıcı asenkron başlatılır, alıcı mesajı alıp ekrana yazdırır.

```rust
use tokio::sync::oneshot;

#[tokio::main]
async fn main() {
    let (tx, rx) = oneshot::channel();

    tokio::spawn(async move {
        tx.send("Merhaba oneshot!").unwrap();
    });

    let msg = rx.await.unwrap();
    println!("Aldım: {}", msg);
}
```
