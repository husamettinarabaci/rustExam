## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Özel Hata Türleri Oluşturma  
#### ✅ Cevap 192: Özel hata türleri oluşturma

Rust'ta özel hata türleri bir `enum` ile tanımlanabilir ve daha iyi hata mesajları ile uyumlu hata yönetimi için `Display` ve `Error` traitleri uygulanabilir.

```rust
use std::fmt;
use std::error::Error;

#[derive(Debug)]
enum BenimHatam {
    Bulunamadi,
    GecersizGirdi(String),
}

impl fmt::Display for BenimHatam {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            BenimHatam::Bulunamadi => write!(f, "Öğe bulunamadı"),
            BenimHatam::GecersizGirdi(msg) => write!(f, "Geçersiz giriş: {}", msg),
        }
    }
}

impl Error for BenimHatam {}

fn bir_sey_yap(girdi: i32) -> Result<i32, BenimHatam> {
    if girdi < 0 {
        Err(BenimHatam::GecersizGirdi("Negatif değer".to_string()))
    } else if girdi == 0 {
        Err(BenimHatam::Bulunamadi)
    } else {
        Ok(girdi * 2)
    }
}

fn main() {
    match bir_sey_yap(-1) {
        Ok(deger) => println!("Başarılı: {}", deger),
        Err(e) => println!("Hata: {}", e),
    }
}
```

Bu yöntem, Rust programlarınızda anlamlı ve tür güvenli hata yönetimi sağlar.
