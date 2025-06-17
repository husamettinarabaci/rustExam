## 📘 Bölüm: Enumlar ve Veri Modelleme  
### 🔹 Kategori: Enumlara `Display` veya `Debug` trait ekleme  
#### ✅ Cevap 425: Enumlara `Display` veya `Debug` trait ekleme

Enumlara `Debug` trait'i otomatik olarak türetilebilir. `Display` trait'i ise elle uygulanır ve enumun nasıl yazdırılacağını özelleştirir.

```rust
use std::fmt;

#[derive(Debug)]
enum Color {
    Red,
    Green,
    Blue,
}

impl fmt::Display for Color {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Color::Red => write!(f, "Red"),
            Color::Green => write!(f, "Green"),
            Color::Blue => write!(f, "Blue"),
        }
    }
}

fn main() {
    let c = Color::Red;
    println!("{:?}", c); // Debug
    println!("{}", c);  // Display
}
```
