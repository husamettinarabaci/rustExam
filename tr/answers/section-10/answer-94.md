## 📘 Bölüm: Yapılar II  
### 🔹 Kategori: Değer döndüren metot  
#### ✅ Cevap 94: Değer döndüren metot

Rust'ta metotlar bir değer döndürebilir. Burada, `Square` adında bir yapı ve ona ait bir `area` metodu tanımlanmıştır. Bu metot, karenin alanını döndürür.

```rust
struct Square {
    side: u32,
}

impl Square {
    fn area(&self) -> u32 {
        self.side * self.side
    }
}

fn main() {
    let s = Square { side: 4 };
    println!("Alan: {}", s.area());
}
```
