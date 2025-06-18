## 📘 Bölüm: Async Hata Yönetimi
### 🔹 Kategori: Async Hata Yönetimi
#### ✅ Cevap 1051: Async fonksiyonlarda `?` ile hata iletimi

Bu örnekte bir async fonksiyon içinde hata döndürebilecek bir işlem yapılır ve `?` operatörü ile hata üst fonksiyona iletilir. `?` operatörü, hata durumunda fonksiyondan erken çıkılmasını sağlar.

```rust
use std::error::Error;

async fn may_fail(flag: bool) -> Result<&'static str, Box<dyn Error>> {
    if flag {
        Ok("Success!")
    } else {
        Err("Something went wrong".into())
    }
}

async fn run() -> Result<(), Box<dyn Error>> {
    let msg = may_fail(false).await?;
    println!("{}", msg);
    Ok(())
}
```
