## 📘 Bölüm: Derleme Zamanı Motorları ve Metaprogramlama
### 🔹 Kategori: Özelleştirme
#### ✅ Cevap 1276: Derleme zamanı varsayılanlar için özelleştirme

Özelleştirme, trait metotlarını belirli tipler için geçersiz kılmanıza olanak tanır (yalnızca nightly):

```rust
#![feature(specialization)]

trait BenimTraitim {
    fn deger() -> &'static str { "varsayılan" }
}

impl<T> BenimTraitim for T {}

impl BenimTraitim for u32 {
    fn deger() -> &'static str { "u32" }
}

fn main() {
    println!("{}", <u32 as BenimTraitim>::deger()); // "u32"
    println!("{}", <i32 as BenimTraitim>::deger()); // "varsayılan"
}
```

Özelleştirme yalnızca nightly Rust'ta kullanılabilir.
