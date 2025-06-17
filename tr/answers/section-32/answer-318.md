## 📘 Bölüm: Traits ve Trait Bound'lar
### 🔹 Kategori: Trait Hiyerarşileri ve Üst Traitler
#### ✅ Cevap 318: Üst traitlerle trait hiyerarşileri oluşturma

Bu soruda, bir trait'in başka bir trait'i üst trait (supertrait) olarak kullanması isteniyor. `Animal` trait'i, `Speak` trait'ini üst trait olarak belirtir. Böylece, `Animal` trait'ini uygulayan bir tip aynı zamanda `Speak` trait'ini de uygulamak zorundadır. `Dog` struct'ı hem `Speak` hem de `Animal` trait'lerini uygular.

```rust
trait Speak {
    fn speak(&self);
}

trait Animal: Speak {
    fn describe(&self);
}

struct Dog;

impl Speak for Dog {
    fn speak(&self) {
        println!("Woof!");
    }
}

impl Animal for Dog {
    fn describe(&self) {
        println!("I am a dog.");
    }
}

fn main() {
    let dog = Dog;
    dog.speak();
    dog.describe();
}
```
