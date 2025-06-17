## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: Varsayılan metot uygulamaları  
#### ✅ Cevap 315: Traitlerde varsayılan metot uygulaması

Bu örnekte, bir trait'te varsayılan metot implementasyonu nasıl yapılır ve bu metot bir struct için nasıl override edilir gösterilmektedir. `Speak` trait'inde bir varsayılan `speak` metodu tanımlanır. `Dog` struct'ı için bu trait uygulanır ve varsayılan metot kullanılır. `Cat` struct'ı için ise trait uygulanırken `speak` metodu özel olarak override edilir. Böylece, trait'in varsayılan davranışı ve override edilmesi arasındaki farkı görebilirsiniz.

```rust
trait Speak {
    fn speak(&self) {
        println!("(Varsayılan) Hayvan konuşuyor.");
    }
}

struct Dog;
struct Cat;

impl Speak for Dog {}

impl Speak for Cat {
    fn speak(&self) {
        println!("Miyav!");
    }
}

fn main() {
    let dog = Dog;
    let cat = Cat;
    dog.speak(); // Varsayılan metot
    cat.speak(); // Override edilmiş metot
}
```
