## 📘 Bölüm: İleri Trait Sistemi ve Uyum  
### 🔹 Kategori: Yerel Modüllerde Yabancı Tipler için Trait Implementasyonu  
#### ✅ Cevap 729: Yerel modüllerde yabancı tipler için trait implementasyonu

Rust'ta yetim kuralı (orphan rule), bir trait'i bir tipe ancak trait veya tipten biri crate'inize aitse uygulayabileceğinizi belirtir. Bu, çakışmaları önler ve uyumu sağlar. Kendi trait'inizi yabancı bir tipe uygulayabilirsiniz, ancak yabancı bir trait'i yabancı bir tipe uygulayamazsınız.

```rust
// Vec<T> yabancı bir tip (std'dan)
trait BenimTrait {
    fn aciklama(&self) -> String;
}

// Yerel trait'i yabancı tipe uygulamak serbesttir
impl<T> BenimTrait for Vec<T> {
    fn aciklama(&self) -> String {
        format!("{} elemanlı bir Vec", self.len())
    }
}

// Yabancı trait'i yabancı tipe uygulamak yasaktır
// impl Display for Vec<T> { ... } // HATA: ikisi de yabancı
```

Bu kısıtlama, derleyici tarafından çakışan implementasyonları önlemek için zorunlu tutulur.
