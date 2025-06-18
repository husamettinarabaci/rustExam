## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri  
### 🔹 Kategori: Trait Nesneleri ve Metot Çağrıları  
#### ✅ Cevap 733: Trait nesneleri üzerinden metot çağırma ve uygulama

Trait nesneleri, aynı trait'i uygulayan farklı tiplerdeki nesneler üzerinde dinamik metot çağrısı yapmayı sağlar. `Box<dyn Trait>` koleksiyonunda saklanan nesneler üzerinde trait metotları çağrılabilir.

```rust
trait Hayvan {
    fn ses(&self) -> String;
}

struct Kopek;
struct Kedi;

impl Hayvan for Kopek {
    fn ses(&self) -> String {
        "Hav!".to_string()
    }
}

impl Hayvan for Kedi {
    fn ses(&self) -> String {
        "Miyav!".to_string()
    }
}

fn main() {
    let hayvanlar: Vec<Box<dyn Hayvan>> = vec![Box::new(Kopek), Box::new(Kedi)];
    for h in hayvanlar {
        println!("{}", h.ses());
    }
}
```
