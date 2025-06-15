## 📘 Bölüm: Yapılar II  
### 🔹 Kategori: İlişkili fonksiyonlar (yapıcılar)  
#### ✅ Cevap 92: İlişkili fonksiyonlar (yapıcılar)

Rust'ta ilişkili fonksiyonlar, bir yapı için `impl` bloğu içinde tanımlanır ve genellikle yapıcı olarak kullanılır. Burada, `Person` adında bir yapı ve ona ait bir `new` ilişkili fonksiyonu tanımlanmıştır.

```rust
struct Person {
    name: String,
    age: u8,
}

impl Person {
    fn new(name: &str, age: u8) -> Self {
        Self {
            name: name.to_string(),
            age,
        }
    }
}

fn main() {
    let p = Person::new("Alice", 30);
    println!("İsim: {}, Yaş: {}", p.name, p.age);
}
```
