## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri
### 🔹 Kategori: Trait Nesnelerinde Downcasting
#### ✅ Cevap 735: `Any` ve `TypeId` ile trait nesnelerinde downcasting

Bir trait nesnesini somut tipine downcast etmek için `Any` trait'ini kullanabilirsiniz. Trait'in `'static` ve nesne güvenli olması gerekir. `downcast_ref` veya `downcast_mut` ile dönüşüm denenebilir.

```rust
use std::any::Any;

trait Hayvan: Any {
    fn ses(&self);
    fn as_any(&self) -> &dyn Any;
}

struct Kopek;
impl Hayvan for Kopek {
    fn ses(&self) { println!("Hav hav!"); }
    fn as_any(&self) -> &dyn Any { self }
}

fn downcast_deneme(hayvan: &dyn Hayvan) {
    if let Some(kopek) = hayvan.as_any().downcast_ref::<Kopek>() {
        println!("Bu bir köpek!");
        kopek.ses();
    } else {
        println!("Köpek değil.");
    }
}

fn main() {
    let kopek = Kopek;
    downcast_deneme(&kopek);
}
```
