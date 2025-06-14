## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Çoklu Hata Tipleri  
#### ✅ Cevap 116: Birden fazla hata tipiyle başa çıkmak

**Açıklama:**
Birden fazla hata tipiyle başa çıkmak için `Box<dyn Error>` veya özel enum kullanılabilir.

```rust
use std::error::Error;
fn birsey_yap() -> Result<(), Box<dyn Error>> {
    // ...
    Ok(())
}
```
