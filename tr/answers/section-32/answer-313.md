## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: Birden Fazla Trait Bound Kullanımı  
#### ✅ Cevap 313: `+` ile birden fazla trait bound kullanımı

Bu soruda, birden fazla trait bound ile jenerik fonksiyon yazımı gösterilmektedir. Hem `Speak` hem de `Run` traitlerini uygulayan bir tür, jenerik fonksiyona parametre olarak alınır ve her iki traitin metotları çağrılır.

```rust
trait Speak {
    fn speak(&self);
}

trait Run {
    fn run(&self);
}

struct Dog;

impl Speak for Dog {
    fn speak(&self) {
        println!("Hav hav!");
    }
}

impl Run for Dog {
    fn run(&self) {
        println!("Koşuyor!");
    }
}

fn perform<T: Speak + Run>(item: T) {
    item.speak();
    item.run();
}

fn main() {
    let dog = Dog;
    perform(dog);
}
```
