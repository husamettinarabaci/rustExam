## 📘 Bölüm: Koleksiyonlar: HashMap  
### 🔹 Kategori: Özel türlerle HashMap  
#### ✅ Cevap 176: Özel türlerle HashMap

Özel struct'lar `Eq`, `PartialEq` ve `Hash` trait'lerini uygularsa anahtar olarak kullanılabilir. Değer olarak ise ek bir gereksinim yoktur. Örnek:

```rust
use std::collections::HashMap;

#[derive(Hash, Eq, PartialEq, Debug)]
struct Nokta {
    x: i32,
    y: i32,
}

fn main() {
    let mut noktalar = HashMap::new();
    noktalar.insert(Nokta { x: 1, y: 2 }, "A");
    noktalar.insert(Nokta { x: 3, y: 4 }, "B");

    println!("{:?}", noktalar);
}
```

- `Nokta` struct'ı anahtar olarak kullanılabilmesi için gerekli trait'leri türetir.
- Özel türler değer olarak da kullanılabilir.
