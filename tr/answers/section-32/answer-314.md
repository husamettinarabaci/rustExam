## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: where ile trait bound yazımı  
#### ✅ Cevap 314: where ifadesiyle trait bound kullanımı

Bu örnekte, bir generic fonksiyonda birden fazla trait bound'unu `where` ifadesiyle nasıl belirteceğimizi gösteriyoruz. `Speak` ve `Run` adında iki trait tanımlanır ve her ikisi de `Dog` struct'ı için uygulanır. `perform_actions` fonksiyonu, parametresinin hem `Speak` hem de `Run` trait'lerini uygulamasını gerektirir ve bu kısıtlamalar `where` ifadesiyle fonksiyon imzasında belirtilir. Bu yöntem, trait bound'ları daha okunaklı ve yönetilebilir hale getirir.

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
        println!("Köpek koşuyor.");
    }
}

fn perform_actions<T>(animal: T)
where
    T: Speak + Run,
{
    animal.speak();
    animal.run();
}

fn main() {
    let dog = Dog;
    perform_actions(dog);
}
```
