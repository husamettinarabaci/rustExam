## 📘 Bölüm: Enumlar ve Veri Modelleme  
### 🔹 Kategori: Yapı içinde enum ve tersi kullanımı  
#### ✅ Cevap 426: Yapı içinde enum ve tersi kullanımı

Enumlar ve yapılar birlikte kullanılabilir. Bir struct içinde enum alanı veya bir enum varyantında struct bulunabilir.

```rust
enum Command {
    Print(String),
    Move(Point),
}

struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let cmd = Command::Move(Point { x: 5, y: 10 });
}
```
