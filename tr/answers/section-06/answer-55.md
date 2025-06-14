## 📚 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Hataları Yönlendirme  
#### ✅ Cevap 55: `?` ile hataları yönlendirmek

**Açıklama:**
`?` operatörü, hata döndüren fonksiyonlarda hatayı üst fonksiyona iletmek için kullanılır.

```rust
use std::fs::File;
use std::io::{self, Read};

fn dosya_oku(yol: &str) -> Result<String, io::Error> {
    let mut dosya = File::open(yol)?;
    let mut icerik = String::new();
    dosya.read_to_string(&mut icerik)?;
    Ok(icerik)
}
```
