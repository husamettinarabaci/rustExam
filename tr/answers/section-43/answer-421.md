## 📘 Bölüm: Enumlar ve Veri Modelleme  
### 🔹 Kategori: Basit ve karmaşık varyantlı enumlar tanımlama  
#### ✅ Cevap 421: Basit ve karmaşık varyantlı enumlar tanımlama

Rust'ta enumlar, birden fazla farklı türde veri içerebilen varyantlar tanımlamak için kullanılır. Basit varyantlar sadece isim içerirken, karmaşık varyantlar veri de taşıyabilir.

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn main() {
    let m1 = Message::Quit;
    let m2 = Message::Move { x: 10, y: 20 };
    let m3 = Message::Write(String::from("Hello"));
    let m4 = Message::ChangeColor(255, 0, 0);
}
```
