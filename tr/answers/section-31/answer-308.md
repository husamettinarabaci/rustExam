## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri  
### 🔹 Kategori: Cebirsel Veri Tipleri ile Modelleme  
#### ✅ Cevap 308: Gelecekte Uyumluluk için #[non_exhaustive] Kullanımı

Bu çözümde, farklı hata türlerini temsil eden bir enum'a `#[non_exhaustive]` özniteliği eklenir. Match ifadesinde joker (`_`) kolu kullanılarak, gelecekte yeni varyantlar eklense bile kodun derlenmeye devam etmesi sağlanır. Bu, API'lerde ileriye dönük uyumluluk için önemlidir.

```rust
#[non_exhaustive]
enum Hata {
    DosyaHatasi(String),
    BaglantiHatasi(u32),
}

fn hata_mesaji(hata: Hata) {
    match hata {
        Hata::DosyaHatasi(msg) => println!("Dosya hatası: {}", msg),
        Hata::BaglantiHatasi(kod) => println!("Bağlantı hatası, kod: {}", kod),
        _ => println!("Bilinmeyen veya yeni bir hata türü!"),
    }
}

fn main() {
    let hata1 = Hata::DosyaHatasi("Dosya bulunamadı".to_string());
    let hata2 = Hata::BaglantiHatasi(404);
    hata_mesaji(hata1);
    hata_mesaji(hata2);
}
```
