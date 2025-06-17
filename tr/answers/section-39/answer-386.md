## 📘 Bölüm: İleri Düzey Desen Eşleme
### 🔹 Kategori: `_` ve `..` ile kısımları yoksayma
#### ✅ Cevap 386: `_` ve `..` ile kısımları yoksayma

Bu soruda, bir tuple veya struct üzerinde match ifadesiyle sadece ilgilenilen alanlar alınır, diğerleri `_` veya `..` ile yoksayılır.

```rust
struct Person { name: String, age: u8, city: String }

fn main() {
    let p = Person { name: "Alice".to_string(), age: 30, city: "Paris".to_string() };
    match p {
        Person { name, .. } => println!("Name: {}", name),
    }

    let tup = (1, 2, 3, 4);
    match tup {
        (first, _, _, last) => println!("First: {}, Last: {}", first, last),
    }
}
```
