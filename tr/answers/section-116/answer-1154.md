## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Async fonksiyonlarda zaman aşımı yönetimi
#### ✅ Cevap 1154: Async fonksiyonlarda zaman aşımı yönetimi

Async fonksiyonlarda zaman aşımı için `tokio::time::timeout` kullanılır. İşlem uzun sürerse hata döner.

```rust
use tokio::time::{timeout, Duration};

#[tokio::main]
async fn main() {
    let sonuc = timeout(Duration::from_secs(1), async {
        tokio::time::sleep(Duration::from_secs(2)).await;
        42
    }).await;
    match sonuc {
        Ok(val) => println!("Tamamlandı: {}", val),
        Err(_) => println!("Zaman aşımı!"),
    }
}
```
