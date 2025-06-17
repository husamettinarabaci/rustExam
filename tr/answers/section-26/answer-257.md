## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: Sahiplik ve Desen Eşleme  
#### ✅ Cevap 257: Alanları çıkarmak ve taşımak için desen eşleme kullanma

Bu soruda, bir struct'ın alanlarını desen eşleme ile çıkarmak ve sahipliğini taşımak için Rust'ın sahiplik kurallarına uygun bir örnek gösterilmektedir. Desen eşleme ile alanların sahipliğini almak, kalan alanların kullanılabilirliğini etkiler. Aşağıdaki örnekte, `name` alanı taşındıktan sonra sadece `age` kullanılabilir.

```rust
struct Person {
    name: String,
    age: u32,
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
        age: 30,
    };

    // Desen eşleme ile name alanının sahipliğini al
    let Person { name, age } = person;
    println!("Name: {}", name);
    println!("Age: {}", age);
    // person artık kullanılamaz çünkü sahipliği alanlara taşındı
}
```
