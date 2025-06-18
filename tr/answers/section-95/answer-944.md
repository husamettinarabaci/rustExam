## 📘 Bölüm: Metaprogramlama ve Yansıma
### 🔹 Kategori: Tip Metadatası ve Trait Yansıma Desenleri
#### ✅ Cevap 944: Tip metadatası ve trait yansıma desenleri

Tip metadatası, dillerde tipler hakkında (isim, alanlar, metotlar gibi) çalışma zamanında erişilebilen bilgilerdir. Rust, çalışma zamanı tip metadatası sunmaz; ancak benzer desenler simüle edilebilir.

Örnek: Tip tanımlama için trait ve enum kullanımı:

```rust
trait TipAdi {
    fn tip_adi(&self) -> &'static str;
}

struct Kullanici;
struct Urun;

impl TipAdi for Kullanici {
    fn tip_adi(&self) -> &'static str { "Kullanici" }
}
impl TipAdi for Urun {
    fn tip_adi(&self) -> &'static str { "Urun" }
}

fn tipi_yazdir<T: TipAdi>(nesne: &T) {
    println!("Tip: {}", nesne.tip_adi());
}
```

Sınırlar: Alanlara veya metotlara çalışma zamanında erişim yoktur. Kullanım alanları: serileştirme, eklenti sistemleri, loglama. Daha gelişmiş ihtiyaçlar için özel kayıtlar veya kod üretimi gerekebilir.
