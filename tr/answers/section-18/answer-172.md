## 📘 Bölüm: Koleksiyonlar: HashMap  
### 🔹 Kategori: HashMap'te değerleri erişme ve güncelleme  
#### ✅ Cevap 172: HashMap'te değerleri erişme ve güncelleme

Bir `HashMap`'te değerlere `get` metodu ile erişilir, güncelleme için `insert` veya `get_mut` kullanılabilir. Örnek:

```rust
use std::collections::HashMap;

fn main() {
    let mut skorlar = HashMap::new();
    skorlar.insert(String::from("Ali"), 10);
    skorlar.insert(String::from("Ayşe"), 20);

    // Değere erişme
    if let Some(skor) = skorlar.get("Ali") {
        println!("Ali'nin skoru: {}", skor);
    }

    // Değeri güncelleme
    if let Some(skor) = skorlar.get_mut("Ayşe") {
        *skor += 5;
    }

    println!("{:?}", skorlar);
}
```

- `get` metodu `Option<&V>` döndürür.
- `get_mut` ile değer değiştirilebilir.
- `insert` ile de değer üzerine yazılabilir.
