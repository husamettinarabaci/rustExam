## 📘 Bölüm: Yapılar I  
### 🔹 Kategori: Yapı Alanları  
#### ✅ Cevap 82: Yapı alanlarına erişim

Rust'ta yapı alanlarına nokta gösterimi ile erişilir. Burada bir `Book` yapısı tanımlanır, bir örneği oluşturulur ve alanları `println!` ile yazdırılır.

```rust
struct Book {
    title: String,
    pages: u32,
}

fn main() {
    let my_book = Book {
        title: String::from("Rust Programlama"),
        pages: 320,
    };
    println!("Başlık: {}", my_book.title);
    println!("Sayfa: {}", my_book.pages);
}
```
