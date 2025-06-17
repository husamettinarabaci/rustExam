## 📘 Bölüm: Result ve Option ile Hata Yönetimi  
### 🔹 Kategori: Result ile Hata Yönetimi  
#### ✅ Cevap 322: Result<T, E> üzerinde desen eşleme ile hataları yönetme

`Result<T, E>` tipi, bir işlemin başarılı (`Ok`) veya hatalı (`Err`) olabileceğini belirtir. Hataları yönetmek için `match` ile desen eşleme kullanılır. Aşağıda hem başarılı hem de hatalı bir örnek gösterilmiştir.

```rust
use std::num::ParseIntError;

fn parse_number(s: &str) -> Result<i32, ParseIntError> {
    s.parse::<i32>()
}

fn main() {
    // Başarılı senaryo
    match parse_number("123") {
        Ok(n) => println!("Başarılı: {}", n),
        Err(e) => println!("Hata: {}", e),
    }
    // Hatalı senaryo
    match parse_number("abc") {
        Ok(n) => println!("Başarılı: {}", n),
        Err(e) => println!("Hata: {}", e),
    }
}
```
