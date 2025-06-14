## 📚 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Çoklu Hata Tipleri  
#### ✅ Cevap 57: Çoklu hata tiplerini yönetmek

**Açıklama:**
`Box<dyn std::error::Error>` ile bir fonksiyondan farklı hata tipleri döndürebilirsiniz.

```rust
use std::fs::File;
use std::io::{self, Read};

fn oku_ve_parse_et(yol: &str) -> Result<i32, Box<dyn std::error::Error>> {
    let mut dosya = File::open(yol)?;
    let mut icerik = String::new();
    dosya.read_to_string(&mut icerik)?;
    let sayi: i32 = icerik.trim().parse()?;
    Ok(sayi)
}
```
