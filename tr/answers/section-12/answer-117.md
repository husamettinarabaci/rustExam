## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Error Trait'i  
#### ✅ Cevap 117: Error trait'i nedir?

**Açıklama:**
`Error` trait'i, özel hata tiplerinin standart hata yönetimiyle kullanılmasını sağlar. Kendi hata tipinize uygulayabilirsiniz.

```rust
use std::fmt;
use std::error::Error;

#[derive(Debug)]
struct BenimHatam;

impl fmt::Display for BenimHatam {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "Benim hatam")
    }
}

impl Error for BenimHatam {}
```
