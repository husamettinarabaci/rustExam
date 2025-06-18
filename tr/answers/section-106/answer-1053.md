## 📘 Bölüm: Async Hata Yönetimi
### 🔹 Kategori: Async Hata Yönetimi
#### ✅ Cevap 1053: Async kodda birden fazla hata tipini birleştirme

Bu örnekte iki farklı hata türü döndürebilen async fonksiyonlar tanımlanır ve hatalar `Box<dyn std::error::Error>` ile birleştirilir.

```rust
use std::error::Error;

async fn parse_num(s: &str) -> Result<i32, std::num::ParseIntError> {
    s.parse::<i32>()
}

async fn may_fail(flag: bool) -> Result<(), &'static str> {
    if flag { Ok(()) } else { Err("flag is false") }
}

async fn run() -> Result<(), Box<dyn Error>> {
    let _ = parse_num("abc").await?;
    may_fail(false).await?;
    Ok(())
}
```
