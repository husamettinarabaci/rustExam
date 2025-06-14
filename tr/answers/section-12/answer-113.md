## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Hata Yayılımı  
#### ✅ Cevap 113: `?` operatörü

**Açıklama:**
`?` operatörü, bir fonksiyonda hata oluşursa hatayı otomatik olarak üst fonksiyona iletir.

```rust
fn sayi_parse(s: &str) -> Result<i32, std::num::ParseIntError> {
    let n = s.parse()?;
    Ok(n)
}
```
