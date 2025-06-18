## 📘 Bölüm: Macro Rules ve Deklaratif Makrolar  
### 🔹 Kategori: Özyinelemeli makrolar ve karmaşık desen eşleme  
#### ✅ Cevap 685: Özyinelemeli makrolar ve karmaşık desen eşleme

Bu soruda, Rust'ta özyinelemeli bir makro ile çoklu argümanlar işlenir. Makro, her argümanı ayrı ayrı işler ve özyineleme ile tümünü kapsar.

```rust
macro_rules! count {
    () => {0};
    ($_head:expr $(, $tail:expr)*) => {1 + count!($($tail),*)};
}

fn main() {
    let n = count!(1, 2, 3, 4);
    println!("Toplam argüman: {}", n);
}
```
Makro, verilen argümanların sayısını özyinelemeli olarak hesaplar.
