## 📘 Bölüm: İleri Trait Sistemi ve Uyum  
### 🔹 Kategori: Blanket Implementasyonlar ve Trait Çözümü  
#### ✅ Cevap 726: Blanket implementasyonlar ve trait çözümünü kontrol etme

Blanket implementasyon, belirli bir trait'i sağlayan tüm tiplere başka bir trait'i uygular. Daha spesifik bir implementasyon varsa, Rust en spesifik olanı seçer. Blanket ve spesifik implementasyonlar çakışırsa, spesifik olan önceliklidir.

```rust
trait Selamla {
    fn selamla(&self);
}

impl<T> Selamla for T {
    fn selamla(&self) {
        println!("Blanket impl'den merhaba!");
    }
}

struct Kisi;

impl Selamla for Kisi {
    fn selamla(&self) {
        println!("Kisi'den merhaba!");
    }
}

fn main() {
    let x = 5;
    x.selamla(); // Blanket impl kullanılır
    let k = Kisi;
    k.selamla(); // Spesifik impl kullanılır
}
```

Burada, `Kisi` için özel bir implementasyon olduğundan Rust onu kullanır, blanket olanı değil.
