## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Trait Metotları  
#### ✅ Cevap 214: Trait metotlarını çağırma

Trait metotları, trait'i uygulayan tipte doğrudan veya trait nesnesiyle çağrılabilir.

```rust
trait Selamla {
    fn selamla(&self);
}

struct Kisi;
impl Selamla for Kisi {
    fn selamla(&self) { println!("Merhaba!"); }
}

let k = Kisi;
k.selamla(); // Doğrudan çağrı

let s: Box<dyn Selamla> = Box::new(Kisi);
s.selamla(); // Trait nesnesiyle çağrı
```
