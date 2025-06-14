## 📚 Bölüm: Trait'ler  
### 🔹 Kategori: Trait Tanımlama  
#### ✅ Cevap 91: Trait tanımlamak

**Açıklama:**
Trait'ler ortak davranışları tanımlar. Bir yapı için trait'i implemente edip metodunu çağırabilirsiniz.

```rust
trait Speak {
    fn speak(&self);
}

struct Dog;
impl Speak for Dog {
    fn speak(&self) {
        println!("Hav hav!");
    }
}

fn main() {
    let d = Dog;
    d.speak();
}
```
