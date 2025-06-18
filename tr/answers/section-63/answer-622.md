## 📘 Bölüm: İleri Trait Tasarımı ve Kullanımı
### 🔹 Kategori: Varsayılan Metot Implementasyonlarını Etkin Kullanma
#### ✅ Cevap 622: Varsayılan metot implementasyonlarını etkin kullanma

Rust'ta trait'ler, metotlar için varsayılan implementasyonlar sunabilir. Bu sayede, trait'i uygulayan tipler isterlerse bu varsayılanı kullanabilir veya kendi implementasyonlarını yazabilirler. Bu, kod tekrarını azaltır ve esnek API'ler sağlar.

```rust
trait Selamla {
    fn selamla(&self) {
        println!("Merhaba!");
    }
}

struct Kisi;

impl Selamla for Kisi {}

fn main() {
    let k = Kisi;
    k.selamla(); // Varsayılan implementasyon kullanılır
}
```
