## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Result Tipi Temelleri  
#### ✅ Cevap 111: Rust'ta Result tipi nedir?

**Açıklama:**
`Result` tipi, bir işlemin başarılı veya hatalı olabileceği durumlarda kullanılır. İki varyantı vardır: `Ok(T)` başarıyı, `Err(E)` hatayı temsil eder.

```rust
fn bol(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("Sıfıra bölünemez".to_string())
    } else {
        Ok(a / b)
    }
}
```
