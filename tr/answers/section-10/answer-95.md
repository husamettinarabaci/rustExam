## 📚 Bölüm: Trait'ler  
### 🔹 Kategori: Trait Nesneleri  
#### ✅ Cevap 95: Trait nesneleri kullanmak

**Açıklama:**
Trait nesneleri dinamik dispatch sağlar. Farklı türler bir vektörde saklanıp trait metodu çağrılabilir.

```rust
trait Hayvan {
    fn ses(&self);
}

struct Kopek;
impl Hayvan for Kopek {
    fn ses(&self) { println!("Hav hav!"); }
}
struct Kedi;
impl Hayvan for Kedi {
    fn ses(&self) { println!("Miyav!"); }
}

fn main() {
    let hayvanlar: Vec<Box<dyn Hayvan>> = vec![Box::new(Kopek), Box::new(Kedi)];
    for h in hayvanlar {
        h.ses();
    }
}
```
