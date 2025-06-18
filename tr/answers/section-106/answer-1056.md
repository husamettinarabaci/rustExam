## 📘 Bölüm: Async Hata Yönetimi
### 🔹 Kategori: Async Hata Yönetimi
#### ✅ Cevap 1056: Asenkron iş akışlarında hata kaydı

Bu örnekte birden fazla async fonksiyonun hata durumları bir log fonksiyonu ile kaydedilir ve uygun mesajlar yazdırılır.

```rust
async fn log_error(e: &str) {
    println!("[ERROR] {}", e);
}

async fn may_fail(flag: bool) -> Result<(), &'static str> {
    if flag { Ok(()) } else { Err("failed!") }
}

#[tokio::main]
async fn main() {
    for i in 0..3 {
        match may_fail(i % 2 == 0).await {
            Ok(_) => println!("Task {} succeeded", i),
            Err(e) => log_error(e).await,
        }
    }
}
```
