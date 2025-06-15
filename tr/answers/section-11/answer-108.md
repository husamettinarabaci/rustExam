## 📘 Bölüm: Enumlar I  
### 🔹 Kategori: Yapı Varyantlı Enum  
#### ✅ Cevap 108: Yapı varyantlı enum

Enum'larda yapı varyantları, her varyant ile adlandırılmış alanlar ilişkilendirmeye olanak tanır. Burada `Message` enum'u iki yapı varyantına sahiptir: `Move { x, y }` ve `Write { text }`. Desen eşleme ile her varyant ayrıştırılır ve işlenir.

```rust
enum Message {
    Move { x: i32, y: i32 },
    Write { text: String },
}

fn isle(msg: Message) {
    match msg {
        Message::Move { x, y } => println!("({},{}) konumuna git", x, y),
        Message::Write { text } => println!("Yaz: {}", text),
    }
}

fn main() {
    let m1 = Message::Move { x: 10, y: 20 };
    let m2 = Message::Write { text: String::from("Merhaba!") };
    isle(m1);
    isle(m2);
}
```
