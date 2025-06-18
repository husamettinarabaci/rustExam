## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri
### 🔹 Kategori: Heterojen Koleksiyonlarda Trait Nesneleri Kullanımı
#### ✅ Cevap 738: Heterojen koleksiyonlarda trait nesneleri kullanımı

Trait nesneleri, aynı trait'i uygulayan farklı tipleri tek bir koleksiyonda saklamanızı sağlar ve heterojen koleksiyonlar oluşturmanıza imkan tanır.

```rust
trait Sekil {
    fn ciz(&self);
}

struct Daire;
struct Kare;

impl Sekil for Daire {
    fn ciz(&self) { println!("Daire çiziliyor"); }
}
impl Sekil for Kare {
    fn ciz(&self) { println!("Kare çiziliyor"); }
}

fn main() {
    let sekiller: Vec<Box<dyn Sekil>> = vec![
        Box::new(Daire),
        Box::new(Kare),
    ];
    for sekil in sekiller.iter() {
        sekil.ciz();
    }
}
```
