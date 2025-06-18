## 📘 Bölüm: İleri Trait Tasarımı ve Kullanımı
### 🔹 Kategori: Blanket Implementasyonlar ve Uyum Kuralları
#### ✅ Cevap 629: Blanket implementasyonlar ve uyum kuralları

Blanket implementasyonlar, belirli trait'leri sağlayan tüm tipler için bir trait implementasyonu yazmanıza olanak tanır. Bu, jenerik programlamada yaygındır. Rust'ın uyum kuralları (yetim kuralı), bir tip/trait çifti için yalnızca bir implementasyon olmasını garanti eder.

```rust
trait Yazdirilabilir {
    fn yazdir(&self);
}

impl<T: std::fmt::Debug> Yazdirilabilir for T {
    fn yazdir(&self) {
        println!("{:?}", self);
    }
}

fn main() {
    42.yazdir();
    "merhaba".yazdir();
}
```
