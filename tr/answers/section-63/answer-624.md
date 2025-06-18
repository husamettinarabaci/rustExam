## 📘 Bölüm: İleri Trait Tasarımı ve Kullanımı
### 🔹 Kategori: Trait Nesneleri ve Dinamik Dağıtım
#### ✅ Cevap 624: Trait nesneleri ile dinamik dağıtım implementasyonu

Trait nesneleri, Rust'ta dinamik dağıtım sağlar. Yani, derleme zamanında tipi bilinmeyen nesneler üzerinde trait metotlarını çağırabilirsiniz. Bunun için `&dyn Trait` veya `Box<dyn Trait>` kullanılır. Sadece nesne güvenli trait'ler trait nesnesi olarak kullanılabilir.

```rust
trait Sekil {
    fn alan(&self) -> f64;
}

struct Daire { yaricap: f64 }
struct Kare { kenar: f64 }

impl Sekil for Daire {
    fn alan(&self) -> f64 { std::f64::consts::PI * self.yaricap * self.yaricap }
}
impl Sekil for Kare {
    fn alan(&self) -> f64 { self.kenar * self.kenar }
}

fn alan_yaz(sekil: &dyn Sekil) {
    println!("Alan: {}", sekil.alan());
}

fn main() {
    let d = Daire { yaricap: 2.0 };
    let k = Kare { kenar: 3.0 };
    alan_yaz(&d);
    alan_yaz(&k);
}
```
