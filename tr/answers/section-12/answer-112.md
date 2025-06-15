## 📘 Bölüm: Enumlar II  
### 🔹 Kategori: Birden Fazla Desenle Eşleme  
#### ✅ Cevap 112: Birden fazla desenle eşleme

Match kollarında `|` operatörü ile birden fazla desen eşlenebilir. Burada hem `Up` hem de `Down` birlikte, `Left` ve `Right` ise birlikte eşlenmiştir.

```rust
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

fn main() {
    let yon = Direction::Left;
    match yon {
        Direction::Up | Direction::Down => println!("Dikey"),
        Direction::Left | Direction::Right => println!("Yatay"),
    }
}
```
