## 📘 Bölüm: İleri Trait Sistemi ve Uyum  
### 🔹 Kategori: Sealed Trait'ler ve Implementasyon Kısıtlamaları  
#### ✅ Cevap 727: Sealed trait'lerle implementasyonları kısıtlama

Rust'ta sealed trait deseni, bir trait'in sadece belirli bir modül veya crate içinde uygulanabilmesini sağlar. Bunu başarmak için, herkese açık trait'e özel (private) bir "sealed" trait üst trait olarak eklenir. Sadece aynı modüldeki tipler sealed trait'i uygulayabildiği için, dışarıdan implementasyon engellenmiş olur.

```rust
mod benim_modulum {
    // Özel sealed trait
    pub(crate) trait Sealed {}

    // Herkese açık trait, sadece Sealed uygulanırsa uygulanabilir
    pub trait BenimTrait: Sealed {
        fn bir_sey_yap(&self) -> String;
    }

    // Sadece bu modüldeki tipler Sealed'ı uygulayabilir
    pub struct BenimTip;
    impl Sealed for BenimTip {}
    impl BenimTrait for BenimTip {
        fn bir_sey_yap(&self) -> String {
            "BenimTip'ten merhaba".to_string()
        }
    }
}

// Modül dışında, Sealed trait'i özel olduğu için BenimTrait uygulanamaz.
```
