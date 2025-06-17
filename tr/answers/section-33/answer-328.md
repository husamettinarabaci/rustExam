## 📘 Bölüm: Result ve Option ile Hata Yönetimi  
### 🔹 Kategori: Basit uygulama hataları için anyhow kullanımı  
#### ✅ Cevap 328: anyhow ile uygulama düzeyinde hata yönetimi

`anyhow` crate'i, farklı hata tiplerini tek bir hata türünde toplayarak uygulama düzeyinde hata yönetimini kolaylaştırır. `anyhow::Result` ile fonksiyonlarınızda farklı hata kaynaklarını zincirleyebilir ve `?` operatörüyle kolayca iletebilirsiniz.

```rust
use anyhow::{Result, Context};
use std::fs;

fn read_and_parse(path: &str) -> Result<i32> {
    let content = fs::read_to_string(path)
        .context("Dosya okunamadı")?;
    let number: i32 = content.trim().parse()
        .context("Sayıya dönüştürülemedi")?;
    Ok(number * 2)
}

fn main() -> Result<()> {
    match read_and_parse("input.txt") {
        Ok(val) => println!("Sonuç: {val}"),
        Err(e) => println!("Hata: {e}"),
    }
    Ok(())
}
```
