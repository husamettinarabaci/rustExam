## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: API'lerde hata kodları ve tanılama kullanımı
#### ✅ Cevap 675: API'lerde hata kodları ve tanılama kullanımı

Hata kodları ve tanılama mesajları ile API hata yönetimi standartlaştırılabilir. Her varyant için kod ve mesaj döndüren metotlar tanımlanabilir.

```rust
#[derive(Debug)]
enum ApiHatasi {
    Bulunamadi,
    Yetkisiz,
    Dahili,
}

impl ApiHatasi {
    fn kod(&self) -> u16 {
        match self {
            ApiHatasi::Bulunamadi => 404,
            ApiHatasi::Yetkisiz => 401,
            ApiHatasi::Dahili => 500,
        }
    }
    fn teshis(&self) -> &'static str {
        match self {
            ApiHatasi::Bulunamadi => "Kaynak bulunamadı.",
            ApiHatasi::Yetkisiz => "Yetkisiz erişim.",
            ApiHatasi::Dahili => "Dahili sunucu hatası.",
        }
    }
}

fn main() {
    let hata = ApiHatasi::Yetkisiz;
    println!("Hata {}: {}", hata.kod(), hata.teshis());
}
```
