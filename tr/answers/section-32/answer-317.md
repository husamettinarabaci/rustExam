## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: Fonksiyon Dönüş Tiplerinde `impl Trait` Kullanımı  
#### ✅ Cevap 317: Fonksiyon dönüş tipinde `impl Trait` kullanımı

Bu örnekte, bir fonksiyonun dönüş tipinde `impl Trait` kullanılarak trait'i uygulayan bir nesne döndürülür. Bu, trait nesnesi döndürmenin daha sade ve güvenli bir yoludur.

```rust
trait Speak {
    fn speak(&self) -> String;
}

struct Dog;

impl Speak for Dog {
    fn speak(&self) -> String {
        String::from("Hav hav!")
    }
}

fn create_speaker() -> impl Speak {
    Dog
}

fn main() {
    let speaker = create_speaker();
    println!("{}", speaker.speak());
}
```
