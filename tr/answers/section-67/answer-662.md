## 📘 Bölüm: Alan Odaklı Tasarım
### 🔹 Kategori: Alan davranışlarını tanımlamak için traitler kullanma
#### ✅ Cevap 662: Alan davranışlarını tanımlamak için traitler kullanma

Trait'ler, Rust'ta alan varlıkları için ortak davranışları tanımlamanıza olanak tanır. Trait implementasyonu ile tipler üzerinde belirli işlemleri gerçekleştirebilirsiniz.

```rust
trait Selamla {
    fn selamla(&self) -> String;
}

struct Kullanici {
    isim: String,
}

impl Selamla for Kullanici {
    fn selamla(&self) -> String {
        format!("Merhaba, {}!", self.isim)
    }
}

fn main() {
    let kullanici = Kullanici { isim: "Mehmet".to_string() };
    println!("{}", kullanici.selamla());
}
```
