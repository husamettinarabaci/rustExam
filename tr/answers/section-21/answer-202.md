## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Traitlerde Varsayılan Metotlar  
#### ✅ Cevap 202: Traitlerde varsayılan metotlar

Rust'ta trait'ler varsayılan metot implementasyonu sunabilir. Trait'i implement eden türler bu varsayılanı kullanabilir veya kendi implementasyonlarını yazarak ezebilirler. Bu, esnek ve tekrar kullanılabilir kod sağlar.

```rust
trait Selamla {
    fn merhaba(&self) {
        println!("Varsayılan trait metodundan merhaba!");
    }
}

struct Insan;
struct Robot;

impl Selamla for Insan {
    // Varsayılan merhaba() kullanılır
}

impl Selamla for Robot {
    fn merhaba(&self) {
        println!("Bip bop! Ben bir robotum.");
    }
}

fn main() {
    let ali = Insan;
    let r2d2 = Robot;
    ali.merhaba(); // Varsayılan kullanılır
    r2d2.merhaba(); // Ezilmiş metot kullanılır
}
```
