## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: Result Zincirleme  
#### ✅ Cevap 177: Birden fazla Result döndüren işlemi zincirleme

Bu fonksiyon, birden fazla `Result` döndüren işlemi `?` operatörü ile zincirlemeyi gösterir.

```rust
fn double_parse(a: &str, b: &str) -> Result<i32, std::num::ParseIntError> {
    let x = a.parse::<i32>()?;
    let y = b.parse::<i32>()?;
    Ok(x + y)
}
```
