## 📘 Bölüm: Kanallar ve Mesaj Geçişi
### 🔹 Kategori: Kanal Kapatma ve Temizliği
#### ✅ Cevap 1018: Kanal kapatma ve temizliği

Bir kanal, tüm göndericiler (tx) düşürüldüğünde otomatik olarak kapanır. Alıcı (rx), kanal kapandığında `None` döner veya hata alır. Görevler, kanalın kapanmasını kontrol ederek temizlik yapabilir.

Örnek:
```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(1);
    drop(tx); // Kanalı kapat

    match rx.recv().await {
        Some(msg) => println!("Aldım: {}", msg),
        None => println!("Kanal kapandı."),
    }
}
```
