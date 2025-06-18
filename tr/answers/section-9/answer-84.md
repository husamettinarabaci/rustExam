## 📘 Bölüm: Yapılar I  
### 🔹 Kategori: Yapı Güncelleme Sözdizimi  
#### ✅ Cevap 84: Yapı güncelleme sözdizimi

Rust'ta yapı güncelleme sözdizimi, bir yapının bazı alanlarını değiştirerek yeni bir örnek oluşturmayı sağlar. Burada sadece `email` alanı değiştirilir, diğer alanlar kopyalanır.

```rust
struct User {
    username: String,
    email: String,
    active: bool,
}

fn main() {
    let user1 = User {
        username: String::from("alice"),
        email: String::from("alice@example.com"),
        active: true,
    };
    let user2 = User {
        email: String::from("alice@rust.com"),
        ..user1
    };
    println!("Kullanıcı2: {} {} {}", user2.username, user2.email, user2.active);
}
```

Not: `..user1` kullandıktan sonra, taşınan alanlar (`String` gibi) nedeniyle `user1` tekrar kullanılamaz.
