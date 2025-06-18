## 📘 Bölüm: İleri Trait Sistemi ve Uyum  
### 🔹 Kategori: Trait Implementasyonu ve Uyum  
#### ✅ Cevap 725: Çakışan implementasyonlar ve derleyici reddi

Rust, trait uyumu kurallarını uygular; bir trait, bir tip için bir crate'te yalnızca bir kez uygulanabilir. Çakışan implementasyonlar (ör. hem `T` hem de `&T` için) derleyici tarafından reddedilir. Bu, belirsizliği önlemek içindir.

```rust
trait BenimTrait {
    fn birsey_yap(&self);
}

impl<T> BenimTrait for T {
    fn birsey_yap(&self) {
        println!("Genel impl");
    }
}

// Bu çakışmaya neden olur:
// impl<T> BenimTrait for &T {
//     fn birsey_yap(&self) {
//         println!("&T için impl");
//     }
// }
```

İkinci implementasyonu açarsanız, derleyici çakışan implementasyonlar hakkında hata verir. Bu, Rust'ın uyum kuralları sayesinde trait implementasyonlarının belirsiz olmamasını sağlar.
