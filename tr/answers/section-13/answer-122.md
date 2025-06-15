## 📘 Bölüm: Modüller I  
### 🔹 Kategori: Modül Organizasyonu  
#### ✅ Cevap 122: Organizasyon için `mod` ve `use` kullanımı

**Açıklama:**
Rust'ta kodunuzu daha düzenli hale getirmek için `mod` ile modül tanımlayabilir ve `use` ile öğeleri scope'a alabilirsiniz. Aşağıda, `math` modülünde tanımlanan `add` fonksiyonu, `use` ile ana fonksiyonda doğrudan çağrılmaktadır.

```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

use math::add;

fn main() {
    let result = add(3, 4);
    println!("Toplam: {}", result);
}
```
