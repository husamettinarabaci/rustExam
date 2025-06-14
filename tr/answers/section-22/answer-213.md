## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Trait Nesneleri  
#### ✅ Cevap 213: Trait nesneleri kullanımı

Trait nesnesi, farklı tiplerin aynı trait'i uygulayarak dinamik olarak kullanılmasını sağlar. `Box<dyn Trait>` ile kullanılır.

```rust
trait Hayvan {
    fn ses(&self);
}

struct Kopek;
impl Hayvan for Kopek {
    fn ses(&self) { println!("Hav hav!"); }
}

let hayvan: Box<dyn Hayvan> = Box::new(Kopek);
hayvan.ses();
```
