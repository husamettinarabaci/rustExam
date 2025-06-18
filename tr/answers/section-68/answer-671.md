## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: Detaylı varyantlarla özel hata enumları tasarlama
#### ✅ Cevap 671: Detaylı varyantlarla özel hata enumları tasarlama

Özel hata enum'ları, farklı hata senaryolarını tip güvenli şekilde temsil etmenizi sağlar. `Display` ve isteğe bağlı olarak `Error` implementasyonu ile kullanıcı dostu mesajlar sunabilirsiniz.

```rust
use std::fmt;
use std::error::Error;

#[derive(Debug)]
enum UygulamaHatasi {
    Bulunamadi,
    GecersizGirdi(String),
    IoHatasi(std::io::Error),
}

impl fmt::Display for UygulamaHatasi {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            UygulamaHatasi::Bulunamadi => write!(f, "Kaynak bulunamadı"),
            UygulamaHatasi::GecersizGirdi(msg) => write!(f, "Geçersiz girdi: {}", msg),
            UygulamaHatasi::IoHatasi(e) => write!(f, "IO hatası: {}", e),
        }
    }
}

impl Error for UygulamaHatasi {}

fn bir_sey_yap(girdi: &str) -> Result<(), UygulamaHatasi> {
    if girdi.is_empty() {
        return Err(UygulamaHatasi::GecersizGirdi("girdi boş olamaz".into()));
    }
    Ok(())
}
```
