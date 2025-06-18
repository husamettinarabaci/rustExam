## 📘 Bölüm: İleri Trait Tasarımı ve Kullanımı
### 🔹 Kategori: Trait Hiyerarşileri ve Üst Traitler
#### ✅ Cevap 621: Trait hiyerarşileri ve üst traitler oluşturma

Rust'ta trait hiyerarşileri, bir trait'in başka bir trait'i üst trait olarak belirtmesiyle oluşturulur. Bir trait, başka bir trait'i üst trait olarak belirttiğinde, o trait'i uygulayan tiplerin üst trait'i de uygulaması gerekir. Bu, kodun yeniden kullanılmasını ve belirli davranışların zorunlu olmasını sağlar.

```rust
trait Hayvan {
    fn ses(&self);
}

trait Evcil: Hayvan {
    fn isim(&self) -> &str;
}

struct Kopek {
    isim: String,
}

impl Hayvan for Kopek {
    fn ses(&self) {
        println!("Hav hav!");
    }
}

impl Evcil for Kopek {
    fn isim(&self) -> &str {
        &self.isim
    }
}

fn main() {
    let k = Kopek { isim: "Karabas".to_string() };
    k.ses();
    println!("İsim: {}", k.isim());
}
```
