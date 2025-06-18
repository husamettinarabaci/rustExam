## 📘 Bölüm: Ömürler I  
### 🔹 Kategori: Trait Nesnelerinde Ömür  
#### ✅ Cevap 80: Trait nesnelerinde ömür

Bir yapı, trait nesnesine referans tutuyorsa, bu referans için ömür parametresi belirtilmelidir. Örnek:

```rust
trait Selamla {
    fn selamla(&self) -> String;
}

struct Selamlayici<'a> {
    selamlayici: &'a dyn Selamla,
}

struct Kisi;

impl Selamla for Kisi {
    fn selamla(&self) -> String {
        String::from("Kişiden merhaba!")
    }
}

fn main() {
    let kisi = Kisi;
    let selamlayici = Selamlayici { selamlayici: &kisi };
    println!("{}", selamlayici.selamlayici.selamla());
}
```
