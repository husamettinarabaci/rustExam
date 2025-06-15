## 📘 Bölüm: Enumlar I  
### 🔹 Kategori: İlişkili Fonksiyonlu Enum  
#### ✅ Cevap 110: İlişkili fonksiyonlu enum

Enum'lar için ilişkili fonksiyonlar `impl` bloğu ile tanımlanabilir. Burada, `Color` enum'u için bir string'den renk oluşturan `from_str` fonksiyonu yazılmıştır. Desen eşleme ile string doğru varyanta dönüştürülür.

```rust
enum Color {
    Red,
    Green,
    Blue,
}

impl Color {
    fn from_str(s: &str) -> Color {
        match s {
            "red" => Color::Red,
            "green" => Color::Green,
            "blue" => Color::Blue,
            _ => Color::Red, // varsayılan
        }
    }
}

fn main() {
    let renk = Color::from_str("green");
    match renk {
        Color::Red => println!("Renk: Kırmızı"),
        Color::Green => println!("Renk: Yeşil"),
        Color::Blue => println!("Renk: Mavi"),
    }
}
```
