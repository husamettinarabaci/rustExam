## 📚 Bölüm: Trait'ler  
### 🔹 Kategori: Trait Sınırları  
#### ✅ Cevap 93: Fonksiyonlarda trait sınırı kullanmak

**Açıklama:**
Trait sınırları, jenerik parametrelerin belirli bir trait'i uygulamasını zorunlu kılar.

```rust
trait Yazdir {
    fn yazdir(&self);
}

fn yazdir_any<T: Yazdir>(item: T) {
    item.yazdir();
}

struct Veri;
impl Yazdir for Veri {
    fn yazdir(&self) {
        println!("Veri");
    }
}

fn main() {
    let v = Veri;
    yazdir_any(v);
}
```
