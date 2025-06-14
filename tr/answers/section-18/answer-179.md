## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: `thiserror` Crate'i  
#### ✅ Cevap 179: Özel hatalar için `thiserror` crate'inin kullanımı

`thiserror` crate'i, özel hata tiplerini kolayca tanımlamanızı ve anlamlı hata mesajları oluşturmanızı sağlar.

```rust
use thiserror::Error;

#[derive(Error, Debug)]
enum BenimHatam {
    #[error("Bir hata oluştu: {0}")]
    Ozel(String),
}

fn bir_sey_yap() -> Result<(), BenimHatam> {
    Err(BenimHatam::Ozel("Bir şeyler ters gitti".into()))
}
```
