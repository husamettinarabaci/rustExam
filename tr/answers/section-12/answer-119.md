## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Hata Tipi Dönüştürme  
#### ✅ Cevap 119: Hata tipleri arasında dönüşüm

**Açıklama:**
`From` trait'i ile hata tipleri arasında dönüşüm yapılabilir.

```rust
use std::num::ParseIntError;
fn parse_ve_topla(a: &str, b: &str) -> Result<i32, ParseIntError> {
    let x: i32 = a.parse()?;
    let y: i32 = b.parse()?;
    Ok(x + y)
}
```
