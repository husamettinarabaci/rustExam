## 📘 Bölüm: Traitler I
### 🔹 Kategori: Trait tanımlama ve implementasyonu
#### ✅ Cevap 201: Trait tanımlama ve implementasyonu

Rust'ta trait, türlerin ortak davranışlarını tanımlar. Aşağıda bir trait'in tanımlanıp bir struct için nasıl implement edileceği gösterilmiştir:

```rust
trait Tanimla {
    fn tanimla(&self) -> String;
}

struct Kisi {
    ad: String,
}

impl Tanimla for Kisi {
    fn tanimla(&self) -> String {
        format!("Kişi: {}", self.ad)
    }
}

fn main() {
    let k = Kisi { ad: String::from("Ayşe") };
    println!("{}", k.tanimla());
}
```

Bu örnek, bir trait'in nasıl tanımlanıp bir struct için implement edileceğini ve trait metodunun nasıl kullanılacağını gösterir.
