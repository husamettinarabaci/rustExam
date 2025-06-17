## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: Trait Tanımlama ve Uygulama  
#### ✅ Cevap 311: Özel bir trait tanımlama ve uygulama

Bu soruda, Rust'ta trait kavramını ve trait implementasyonunu gösteriyoruz. Traitler, bir türün sahip olması gereken davranışları tanımlar. `Speak` traiti tanımlanır ve `Dog` struct'ı için uygulanır. `Dog` struct'ı, `speak` metodunu "Hav hav!" çıktısı verecek şekilde uygular.

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
    let dog = Dog;
    dog.speak();
}
```
