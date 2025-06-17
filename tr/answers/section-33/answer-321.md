## 📘 Bölüm: Result ve Option ile Hata Yönetimi  
### 🔹 Kategori: `?` Operatörü ile Hata İletimi  
#### ✅ Cevap 321: `?` operatörü ile hata iletimini sağlama

`?` operatörü, bir fonksiyonda oluşan hatayı üst fonksiyona kolayca iletmek için kullanılır. Eğer hata oluşursa, fonksiyon hemen döner ve hatayı çağırana iletir. Bu, hata zincirlemesini ve kodun daha okunaklı olmasını sağlar.

```rust
use std::num::ParseIntError;

fn parse_number(s: &str) -> Result<i32, ParseIntError> {
    let n = s.parse::<i32>()?;
    Ok(n)
}

fn main() {
    // Başarılı senaryo
    match parse_number("42") {
        Ok(n) => println!("Başarılı: {}", n),
        Err(e) => println!("Hata: {}", e),
    }
    // Hatalı senaryo
    match parse_number("hatalı") {
        Ok(n) => println!("Başarılı: {}", n),
        Err(e) => println!("Hata: {}", e),
    }
}
```
