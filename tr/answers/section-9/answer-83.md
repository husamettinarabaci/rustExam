## 📘 Bölüm: Yapılar I  
### 🔹 Kategori: Yapı Alanları  
#### ✅ Cevap 83: Çok alanlı yapı

Bu örnekte, Rust'ta farklı türde alanlara sahip bir yapı tanımlanır. `Person` yapısında bir `String`, bir `u8` ve bir `bool` alan bulunur. Bir örnek oluşturulup alanlar yazdırılır.

```rust
struct Person {
    name: String,
    age: u8,
    is_student: bool,
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
        age: 22,
        is_student: true,
    };
    println!("İsim: {}", person.name);
    println!("Yaş: {}", person.age);
    println!("Öğrenci mi: {}", person.is_student);
}
```
