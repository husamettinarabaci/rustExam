## 📘 Bölüm: İleri Düzey Desen Eşleme
### 🔹 Kategori: Match kollarında `@` bağlamaları kullanımı
#### ✅ Cevap 389: Match kollarında `@` bağlamaları kullanımı

Bu soruda, match ifadesinde `@` bağlaması ile bir değeri hem desen eşleyip hem de bağlama örneği gösterilir.

```rust
enum Message {
    Number(i32),
    Text(String),
}

fn main() {
    let msg = Message::Number(42);
    match msg {
        n @ Message::Number(10..=100) => println!("Matched number in range: {:?}", n),
        Message::Number(n) => println!("Other number: {}", n),
        Message::Text(s) => println!("Text: {}", s),
    }
}
```
