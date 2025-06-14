# 📗 Bölüm: Fonksiyonlar I  
## 🔹 Kategori: Trait Nesneleri ve Dinamik Dağıtım  
### ✅ Cevap 44: Çok biçimlilik için trait nesneleri kullanımı

**Açıklama:**
Trait nesneleri, aynı trait'i uygulayan farklı türlerle dinamik olarak çalışmayı sağlar ve çok biçimlilik sunar.

**Örnek:**
```rust
trait Animal {
    fn speak(&self);
}

struct Dog;
impl Animal for Dog {
    fn speak(&self) { println!("Hav hav!"); }
}

struct Cat;
impl Animal for Cat {
    fn speak(&self) { println!("Miyav!"); }
}

fn make_speak(animal: &dyn Animal) {
    animal.speak();
}

fn main() {
    let dog = Dog;
    let cat = Cat;
    make_speak(&dog);
    make_speak(&cat);
}
```
Burada hem `Dog` hem de `Cat` `Animal` trait'ini uygular ve `make_speak` fonksiyonu trait nesnesi ile çalışır.
