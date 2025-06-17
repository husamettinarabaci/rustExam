## 📘 Bölüm: Result ve Option ile Hata Yönetimi  
### 🔹 Kategori: thiserror ile hata enumları türetme  
#### ✅ Cevap 329: thiserror ile hata enumları türetme

`thiserror` crate'i, Rust'ta hata türlerini kolayca tanımlamak ve açıklayıcı hata mesajları eklemek için kullanılır. `#[derive(Error)]` ile hata enumları oluşturabilir ve her varyant için özel mesajlar tanımlayabilirsiniz.

```rust
use thiserror::Error;

#[derive(Debug, Error)]
enum MyError {
    #[error("Dosya bulunamadı: {0}")]
    NotFound(String),
    #[error("Geçersiz sayı: {0}")]
    InvalidNumber(String),
}

fn parse_file_content(content: &str) -> Result<i32, MyError> {
    content.trim().parse::<i32>()
        .map_err(|_| MyError::InvalidNumber(content.to_string()))
}

fn main() {
    let result = parse_file_content("abc");
    match result {
        Ok(val) => println!("Sonuç: {val}"),
        Err(e) => println!("Hata: {e}"),
    }
}
```
