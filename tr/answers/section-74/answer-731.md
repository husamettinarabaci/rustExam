## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri  
### 🔹 Kategori: Trait Nesneleri ve Dinamik Dağıtım  
#### ✅ Cevap 731: `&dyn Trait` ve `Box<dyn Trait>` ile trait nesneleri oluşturma ve kullanma

Trait nesneleri, Rust'ta dinamik dağıtım sağlar. `&dyn Trait` referans, `Box<dyn Trait>` ise heap üzerinde trait nesnesi oluşturur. Her ikisiyle de trait metotlarını çalışma zamanında farklı tipler üzerinde çağırabilirsiniz.

```rust
trait Selamla {
    fn selamla(&self) -> String;
}

struct Ingilizce;
struct Turkce;

impl Selamla for Ingilizce {
    fn selamla(&self) -> String {
        "Hello!".to_string()
    }
}

impl Selamla for Turkce {
    fn selamla(&self) -> String {
        "Merhaba!".to_string()
    }
}

fn main() {
    let ing = Ingilizce;
    let tr = Turkce;

    // Referans trait nesnesi
    let selamlayicilar: Vec<&dyn Selamla> = vec![&ing, &tr];
    for s in selamlayicilar {
        println!("{}", s.selamla());
    }

    // Box ile trait nesnesi
    let kutulu: Vec<Box<dyn Selamla>> = vec![Box::new(Ingilizce), Box::new(Turkce)];
    for s in kutulu {
        println!("{}", s.selamla());
    }
}
```
