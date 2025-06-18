## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: Hataları bağlamla sarmalama ve zincirleme
#### ✅ Cevap 673: Hataları bağlamla sarmalama ve zincirleme

Hataları bağlamla sarmak, hata zincirinde tanılamayı kolaylaştırır. `anyhow` crate'inin `.context()` metodu bu amaçla kullanılır.

```rust
use anyhow::{Context, Result};
use std::fs::File;

fn dosya_oku(yol: &str) -> Result<String> {
    std::fs::read_to_string(yol)
        .context(format!("Dosya okunamadı: {}", yol))
}

fn main() {
    match dosya_oku("yok.txt") {
        Ok(_) => println!("Dosya başarıyla okundu"),
        Err(e) => println!("Hata: {:#}", e),
    }
}
```
