## 📘 Bölüm: Kanallar ve Mesaj Geçişi
### 🔹 Kategori: Kanal Hatalarını Zarifçe Yönetme
#### ✅ Cevap 1019: Kanal hatalarını zarifçe yönetme

Kanalda en sık karşılaşılan hatalar: gönderici yokken alıcı beklerse `None` döner, alıcı yokken gönderici hata alır. Bu hatalar `Result` veya `Option` ile yakalanır ve uygun şekilde yönetilir.

Örnek:
```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(1);
    drop(tx); // Gönderici yok

    match rx.recv().await {
        Some(msg) => println!("Aldım: {}", msg),
        None => println!("Kanal kapalı, hata yönetildi."),
    }
}
```
