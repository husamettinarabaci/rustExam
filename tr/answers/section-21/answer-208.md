## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Where İfadelerinde Trait Sınırları  
#### ✅ Cevap 208: `where` ifadeleri kullanımı

Rust'ta `where` ifadesi, generic parametreler için karmaşık trait sınırlarını daha okunaklı şekilde belirtmenizi sağlar. Burada, `show_and_serialize` fonksiyonu parametresinin hem `Displayable` hem de `Serializable` trait'lerini uygulamasını `where` ile şart koşuyor.

```rust
trait Displayable {
    fn display(&self);
}

trait Serializable {
    fn serialize(&self) -> String;
}

struct User {
    name: String,
}

impl Displayable for User {
    fn display(&self) {
        println!("Kullanıcı: {}", self.name);
    }
}

impl Serializable for User {
    fn serialize(&self) -> String {
        format!("{{\"isim\":\"{}\"}}", self.name)
    }
}

fn show_and_serialize<T>(item: T) -> String
where
    T: Displayable + Serializable,
{
    item.display();
    item.serialize()
}

fn main() {
    let user = User { name: String::from("Ali") };
    let serialized = show_and_serialize(user);
    println!("Serileştirilmiş: {}", serialized);
}
```
