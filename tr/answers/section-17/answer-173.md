## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: Özel Hata Tipleri  
#### ✅ Cevap 173: Özel hata tipi tanımlama ve kullanımı

Bu örnek, özel bir hata tipinin nasıl tanımlanacağını ve `Result` döndüren bir fonksiyonda nasıl kullanılacağını gösterir.

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

fn bir_sey_yap(input: i32) -> Result<i32, MyError> {
    if input < 0 {
        Err(MyError::GecersizGirdi)
    } else {
        Ok(input)
    }
}
```
