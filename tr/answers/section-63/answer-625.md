## 📘 Bölüm: İleri Trait Tasarımı ve Kullanımı
### 🔹 Kategori: Varsayılan Geçersiz Kılmalar için Özelleştirme (nightly)
#### ✅ Cevap 625: Varsayılan geçersiz kılmalar için özelleştirme (nightly)

Özelleştirme (specialization), Rust'ın nightly sürümünde bulunan bir özelliktir. Bir trait metoduna varsayılan bir implementasyon verip, belirli tipler için bunu geçersiz kılabilirsiniz. Bunun için `default` anahtar kelimesi ve `specialization` özelliği gerekir.

```rust
#![feature(specialization)]

trait YazdirTip {
    fn yazdir(&self) {
        println!("Varsayılan tip");
    }
}

impl<T> YazdirTip for T {}

impl YazdirTip for i32 {
    fn yazdir(&self) {
        println!("i32 tipi: {}", self);
    }
}

fn main() {
    42.yazdir(); // i32
    3.14.yazdir(); // f64 (varsayılan)
}
```
// Not: Nightly Rust ve specialization özelliği gerektirir.
