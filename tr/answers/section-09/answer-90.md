## 📘 Bölüm: Yapılar I  
### 🔹 Kategori: İlişkili fonksiyonlu yapılar  
#### ✅ Cevap 90: İlişkili fonksiyonlu yapılar

Rust'ta ilişkili fonksiyonlar, bir `impl` bloğu içinde tanımlanır ve genellikle yapıcı olarak kullanılır. Burada, `Rectangle` adında bir yapı ve ona ait bir `new` ilişkili fonksiyonu tanımlanmıştır.

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    // İlişkili fonksiyon (yapıcı)
    fn new(width: u32, height: u32) -> Self {
        Self { width, height }
    }
}

fn main() {
    let rect = Rectangle::new(30, 50);
    println!("Rectangle: {} x {}", rect.width, rect.height);
}
```
