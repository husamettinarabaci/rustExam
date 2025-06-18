## 📘 Bölüm: Async Hata Yönetimi
### 🔹 Kategori: Async Hata Yönetimi
#### ✅ Cevap 1052: `Result` ile async/await kullanımı

Bu örnekte bir async fonksiyon `Result` döndürür ve çağrıldığı yerde `await` ile beklenir. Sonuç, hata veya başarıya göre kontrol edilir.

```rust
async fn try_parse(num: &str) -> Result<i32, std::num::ParseIntError> {
    num.parse::<i32>()
}

#[tokio::main]
async fn main() {
    match try_parse("42").await {
        Ok(n) => println!("Parsed: {}", n),
        Err(e) => println!("Parse error: {}", e),
    }
}
```
