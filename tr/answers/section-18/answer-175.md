## 📘 Bölüm: Koleksiyonlar: HashMap  
### 🔹 Kategori: HashMap'te string olmayan anahtarlar  
#### ✅ Cevap 175: HashMap'te string olmayan anahtarlar

`HashMap` anahtarı olarak `Eq` ve `Hash` trait'lerini uygulayan her tür kullanılabilir, buna tamsayılar da dahildir. Örnek:

```rust
use std::collections::HashMap;

fn main() {
    let mut sayilar = HashMap::new();
    sayilar.insert(1, String::from("bir"));
    sayilar.insert(2, String::from("iki"));

    println!("{:?}", sayilar);
}
```

- Burada anahtarlar tamsayı, değerler string'dir.
- `Eq` ve `Hash` trait'lerini uygulayan her tür anahtar olarak kullanılabilir.
