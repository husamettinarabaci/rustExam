## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: `thiserror` ve `anyhow` crate'lerini etkin kullanma
#### ✅ Cevap 672: `thiserror` ve `anyhow` crate'lerini etkin kullanma

`thiserror` crate'i ile özel hata tipleri kolayca tanımlanabilir, `anyhow` ise uygulama kodunda esnek hata yönetimi sağlar. `.context()` ile hata bağlamı eklenebilir.

```rust
use thiserror::Error;
use anyhow::{Result, Context};

#[derive(Error, Debug)]
enum Hata {
    #[error("Bulunamadı")]
    Bulunamadi,
    #[error("Geçersiz girdi: {0}")]
    GecersizGirdi(String),
}

fn hata_olabilir(girdi: &str) -> Result<(), Hata> {
    if girdi.is_empty() {
        Err(Hata::GecersizGirdi("boş string".into()))
    } else {
        Ok(())
    }
}

fn main() -> anyhow::Result<()> {
    hata_olabilir("").context("Girdi işlenemedi")?;
    Ok(())
}
```
