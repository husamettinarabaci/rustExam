## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri
### 🔹 Kategori: Veri Taşıyan Enumlar
#### ✅ Cevap 301: Veri taşıyan özel enum tanımlama

Bu soruda, farklı türde veri taşıyan üç varyantlı bir enum tanımlanır. Her varyant için örnekler oluşturulur ve `match` ile ayırt edilerek içlerindeki veriler terminale yazdırılır. Rust'ta enumlar, farklı veri tiplerini tek bir çatı altında toplamak için kullanılır ve desen eşleme ile kolayca ayrıştırılabilir.

```rust
// Farklı türde veri taşıyan bir enum tanımı
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(u8, u8, u8),
}

fn main() {
    let messages = [
        Message::Quit,
        Message::Move { x: 10, y: 20 },
        Message::Write(String::from("Merhaba, Rust!")),
        Message::ChangeColor(255, 0, 0),
    ];

    for msg in &messages {
        match msg {
            Message::Quit => println!("Çıkış mesajı"),
            Message::Move { x, y } => println!("Taşı: x={}, y={}", x, y),
            Message::Write(text) => println!("Yaz: {}", text),
            Message::ChangeColor(r, g, b) => println!("Renk değiştir: {}, {}, {}", r, g, b),
        }
    }
}
```
