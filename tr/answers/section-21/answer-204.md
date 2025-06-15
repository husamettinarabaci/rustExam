## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Trait Metotları ve Kullanımı  
#### ✅ Cevap 204: Trait metotlarını çağırma

Trait metotlarını çağırmak için, trait'i uygulayan türde doğrudan metot sözdizimini kullanabilirsiniz. Burada hem `Book` hem de `Car` yapıları `Describable` trait'ini uygular ve `main` fonksiyonunda `describe()` metotları çağrılır.

```rust
trait Describable {
    fn describe(&self) -> String;
}

struct Book {
    title: String,
}

struct Car {
    model: String,
}

impl Describable for Book {
    fn describe(&self) -> String {
        format!("Kitap: {}", self.title)
    }
}

impl Describable for Car {
    fn describe(&self) -> String {
        format!("Araba: {}", self.model)
    }
}

fn main() {
    let b = Book { title: String::from("Rust Programlama") };
    let c = Car { model: String::from("Tesla Model S") };
    println!("{}", b.describe());
    println!("{}", c.describe());
}
```
