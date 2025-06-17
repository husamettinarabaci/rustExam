## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: Trait Bound'lar ile Jenerik Fonksiyonlar  
#### ✅ Cevap 312: Jenerik fonksiyonlara trait bound ekleme

Bu soruda, trait bound ile jenerik fonksiyon yazımı gösterilmektedir. `Speak` traiti tanımlanır ve bir struct için uygulanır. Jenerik fonksiyon, parametre olarak `Speak` traitini uygulayan herhangi bir türü kabul eder ve onun `speak` metodunu çağırır.

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

fn make_speak<T: Speak>(item: T) {
    item.speak();
}

fn main() {
    let dog = Dog;
    make_speak(dog);
}
```
