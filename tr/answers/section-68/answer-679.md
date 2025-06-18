## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: Hatalı yapıcılar ve kurucular tanımlama
#### ✅ Cevap 679: Hatalı yapıcılar ve kurucular tanımlama

Hatalı yapıcılar, olası başarısızlıkları belirtmek için `Result` döndürür. Hata tipleriyle neden başarısız olunduğu açıklanabilir.

```rust
#[derive(Debug)]
struct Kullanici {
    isim: String,
}

#[derive(Debug)]
enum KullaniciHatasi {
    BosIsim,
}

impl Kullanici {
    fn yeni(isim: &str) -> Result<Self, KullaniciHatasi> {
        if isim.is_empty() {
            Err(KullaniciHatasi::BosIsim)
        } else {
            Ok(Kullanici { isim: isim.to_string() })
        }
    }
}

fn main() {
    match Kullanici::yeni("") {
        Ok(k) => println!("Kullanıcı: {:?}", k),
        Err(e) => println!("Hata: {:?}", e),
    }
}
```
