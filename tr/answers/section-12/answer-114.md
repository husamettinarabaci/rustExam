## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Özel Hata Tipleri  
#### ✅ Cevap 114: Özel hata tipi tanımlama

**Açıklama:**
Enum ile özel hata tipi tanımlanabilir ve `Error` trait'i uygulanabilir.

```rust
use std::fmt;
use std::error::Error;

#[derive(Debug)]
enum BenimHatam {
    Bulunamadi,
    GecersizGirdi,
}

impl fmt::Display for BenimHatam {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:?}", self)
    }
}

impl Error for BenimHatam {}
```
