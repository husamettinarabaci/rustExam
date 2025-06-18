## 📘 Bölüm: Yapılar I  
### 🔹 Kategori: Yapı Tanımı ve Örnek Oluşturma  
#### ✅ Cevap 81: Bir yapı tanımlama ve örnek oluşturma

Rust'ta yapı (struct), ilişkili verileri bir arada tutan özel bir veri tipidir. Burada `Person` yapısı tanımlanıp, örneği oluşturulmuştur.

```rust
struct Person {
    name: String,
    age: u32,
}

fn main() {
    let person = Person {
        name: String::from("Ali"),
        age: 25,
    };
    println!("Ad: {}, Yaş: {}", person.name, person.age);
}
```
