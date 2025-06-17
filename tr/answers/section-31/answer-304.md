## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri  
### 🔹 Kategori: Enum Metotları ve Kullanımı  
#### ✅ Cevap 304: Ortak mantıkla enum varyantlarını eşleme

Bir enumun tüm varyantlarını tek bir fonksiyon veya metot ile işlemek için `match` ifadesi kullanılır. Aşağıdaki örnekte, farklı veri taşıyan `Message` enumu tanımlanmış ve her varyant için farklı bir çıktı üreten bir `call` metodu uygulanmıştır.

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    fn call(&self) {
        match self {
            Message::Quit => println!("Çıkılıyor..."),
            Message::Move { x, y } => println!("Taşı: x={}, y={}", x, y),
            Message::Write(text) => println!("Yaz: {}", text),
            Message::ChangeColor(r, g, b) => println!("Renk değiştir: {}, {}, {}", r, g, b),
        }
    }
}

fn main() {
    let m1 = Message::Quit;
    let m2 = Message::Move { x: 10, y: 20 };
    let m3 = Message::Write(String::from("Merhaba!"));
    let m4 = Message::ChangeColor(255, 0, 0);
    m1.call();
    m2.call();
    m3.call();
    m4.call();
}
```
