## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Trait Tanımlama ve Kullanımı  
#### ✅ Cevap 211: Trait tanımlama ve implementasyonu

Trait, ortak davranışları tanımlamak için kullanılır. Bir trait tanımlanır ve bir tipe uygulanır.

```rust
trait Selamla {
    fn selamla(&self);
}

struct Kisi;
impl Selamla for Kisi {
    fn selamla(&self) {
        println!("Merhaba!");
    }
}
```
