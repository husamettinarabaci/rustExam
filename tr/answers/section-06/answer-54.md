## 📚 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Özel Hata Tipleri  
#### ✅ Cevap 54: Özel hata tipi tanımlamak

**Açıklama:**
Kendi hata tipinizi enum ile tanımlayabilir ve özel hata mesajları için `Display` trait'ini implemente edebilirsiniz.

```rust
use std::fmt;

enum MyError {
    Bulunamadi,
    GecersizGirdi,
}

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            MyError::Bulunamadi => write!(f, "Bulunamadı"),
            MyError::GecersizGirdi => write!(f, "Geçersiz girdi"),
        }
    }
}

fn bir_sey_yap(girdi: i32) -> Result<i32, MyError> {
    if girdi < 0 {
        Err(MyError::GecersizGirdi)
    } else if girdi == 0 {
        Err(MyError::Bulunamadi)
    } else {
        Ok(girdi)
    }
}
```
