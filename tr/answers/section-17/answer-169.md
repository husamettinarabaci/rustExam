## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: `|` ile birden fazla desen kullanma  
#### ✅ Cevap 169: `|` ile birden fazla desen kullanma

Bu örnekte, desen eşlemede `|` operatörünün birden fazla değeri tek bir kolda eşlemek için nasıl kullanılacağı gösterilmektedir. Bu, birden fazla durumu kısa ve öz şekilde ele almanızı sağlar.

```rust
fn main() {
    let value = 3;
    match value {
        1 | 3 | 5 => println!("Tek sayı: {}", value),
        2 | 4 | 6 => println!("Çift sayı: {}", value),
        _ => println!("Diğer değer: {}", value),
    }
}
```
