## 📘 Bölüm: Async Hata Yönetimi
### 🔹 Kategori: Async Hata Yönetimi
#### ✅ Cevap 1057: Dinamik hata yönetimi için `anyhow` kullanımı

Bu örnekte async fonksiyonda hata yönetimi için `anyhow` crate'i kullanılır ve hata oluştuğunda kullanıcıya anlamlı bir mesaj gösterilir.

```rust
use anyhow::{Result, anyhow};

async fn may_fail(flag: bool) -> Result<&'static str> {
    if flag {
        Ok("Başarılı!")
    } else {
        Err(anyhow!("Bir hata oluştu"))
    }
}

#[tokio::main]
async fn main() -> Result<()> {
    match may_fail(false).await {
        Ok(msg) => println!("{}", msg),
        Err(e) => println!("Hata: {}", e),
    }
    Ok(())
}
```
