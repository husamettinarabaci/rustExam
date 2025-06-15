## 📘 Bölüm: Yapılar II  
### 🔹 Kategori: Zincirleme metotlar  
#### ✅ Cevap 95: Zincirleme metotlar

Rust'ta zincirleme metotlar, metotların `&mut self` döndürmesiyle sağlanır. Burada, `Builder` adında bir yapı ve `set_x`, `set_y` metotları ile zincirleme örneği gösterilmiştir.

```rust
struct Builder {
    x: i32,
    y: i32,
}

impl Builder {
    fn set_x(&mut self, x: i32) -> &mut Self {
        self.x = x;
        self
    }
    fn set_y(&mut self, y: i32) -> &mut Self {
        self.y = y;
        self
    }
}

fn main() {
    let mut b = Builder { x: 0, y: 0 };
    b.set_x(10).set_y(20);
    println!("x: {}, y: {}", b.x, b.y);
}
```
