## 📘 Bölüm: Ömürler ve Ödünç Alma Pratiği  
### 🔹 Kategori: Trait Implementasyonlarında Ömür Sınırları  
#### ✅ Cevap 447: Trait implementasyonlarında ömür sınırları

Trait implementasyonlarında ömür sınırı, trait'in referanslarla çalışmasını sağlar. Aşağıda ömür sınırı içeren bir trait ve implementasyon örneği verilmiştir.

```rust
trait Yazdir<'a> {
    fn yazdir(&self) -> &'a str;
}

struct Mesaj<'a> {
    icerik: &'a str,
}

impl<'a> Yazdir<'a> for Mesaj<'a> {
    fn yazdir(&self) -> &'a str {
        self.icerik
    }
}

fn main() {
    let yazi = String::from("Merhaba!");
    let mesaj = Mesaj { icerik: &yazi };
    println!("{}", mesaj.yazdir());
}
```
