## 📘 Bölüm: Result ve Option ile Hata Yönetimi  
### 🔹 Kategori: Özel tipler için Error traitini uygulama  
#### ✅ Cevap 325: Özel bir hata tipi için Error traitini uygulama

Rust'ta özel hata tipleri genellikle bir enum olarak tanımlanır. Standart hata yönetimiyle uyumlu olması için bu tipe `std::fmt::Display` ve `std::error::Error` traitleri uygulanır. Böylece hata mesajları anlamlı olur ve hata zincirlemesi yapılabilir.

```rust
use std::fmt;
use std::error::Error;

#[derive(Debug)]
enum MyError {
    NotFound,
    InvalidInput(String),
}

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            MyError::NotFound => write!(f, "Item not found"),
            MyError::InvalidInput(msg) => write!(f, "Invalid input: {}", msg),
        }
    }
}

impl Error for MyError {}

fn do_something(input: &str) -> Result<(), MyError> {
    if input.is_empty() {
        Err(MyError::InvalidInput("input is empty".to_string()))
    } else if input == "none" {
        Err(MyError::NotFound)
    } else {
        Ok(())
    }
}
```
