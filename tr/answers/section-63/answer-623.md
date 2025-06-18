## 📘 Bölüm: İleri Trait Tasarımı ve Kullanımı
### 🔹 Kategori: İlişkili Tip ve Sabitli Traitler Tasarlama
#### ✅ Cevap 623: İlişkili tip ve sabitli traitler tasarlama

Trait'lerde ilişkili tipler ve sabitler, trait'i uygulayan tiplerin belirli türleri ve değerleri belirtmesini sağlar. Bu, jenerik kod yazarken ve bazı kuralları zorunlu kılarken faydalıdır.

```rust
trait Sayac {
    type Deger;
    const ADIM: usize;
    fn sonraki(&mut self) -> Option<Self::Deger>;
}

struct SayacUyg {
    sayac: usize,
}

impl Sayac for SayacUyg {
    type Deger = usize;
    const ADIM: usize = 1;
    fn sonraki(&mut self) -> Option<Self::Deger> {
        self.sayac += Self::ADIM;
        Some(self.sayac)
    }
}

fn main() {
    let mut s = SayacUyg { sayac: 0 };
    println!("{}", s.sonraki().unwrap());
}
```
