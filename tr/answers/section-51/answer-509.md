## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Görev İptali ve Zarif Kapatma  
#### ✅ Cevap 509: Görev iptali ve zarif kapatma yönetimi

Bir async görevi iptal etmek için `JoinHandle::abort` kullanılabilir. Görev iptal edildiğinde bir mesaj yazdırabilirsiniz.

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let handle = tokio::spawn(async {
        loop {
            println!("Çalışıyor...");
            sleep(Duration::from_millis(500)).await;
        }
    });

    sleep(Duration::from_secs(2)).await;
    handle.abort();
    println!("Görev iptal edildi ve zarifçe kapatıldı.");
}
```
