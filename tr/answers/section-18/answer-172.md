## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: `?` Operatörü  
#### ✅ Cevap 172: `?` operatörü ile hata yayılımı

Bu fonksiyon, dosya okuma sırasında hata yayılımı için `?` operatörünün nasıl kullanılacağını gösterir. Operatör, hata oluşursa otomatik olarak döndürür.

```rust
use std::fs;
use std::io;

fn read_file_contents(path: &str) -> Result<String, io::Error> {
    fs::read_to_string(path)
}
```
