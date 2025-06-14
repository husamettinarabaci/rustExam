## 📚 Bölüm: Hata Yönetimi  
### 🔹 Kategori: İteratörlerde Hata Yönetimi  
#### ✅ Cevap 58: İteratörlerde hata yönetimi

**Açıklama:**
İteratörlerde `map` ve `collect` ile hata yönetimi yapılabilir.

```rust
fn main() {
    let diziler = vec!["1", "2", "a"];
    let sonuc: Result<Vec<i32>, _> = diziler.iter().map(|s| s.parse()).collect();
    match sonuc {
        Ok(sayilar) => println!("Sayilar: {:?}", sayilar),
        Err(e) => println!("Hata: {}", e),
    }
}
```
