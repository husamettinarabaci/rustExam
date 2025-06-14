## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Result ile Eşleşme  
#### ✅ Cevap 118: Result ile pattern matching

**Açıklama:**
Result değerleriyle pattern matching yapılabilir.

```rust
let sonuc: Result<i32, &str> = Ok(10);
match sonuc {
    Ok(deger) => println!("Değer: {}", deger),
    Err(e) => println!("Hata: {}", e),
}
```
