## 📘 Bölüm: Dosya G/Ç ve Dosya Sistemi  
### 🔹 Kategori: Dizin İşlemleri  
#### ✅ Cevap 404: Dizin oluşturma ve silme

Bu soruda, bir dizin oluşturmayı, varlığını kontrol etmeyi ve silmeyi öğrendiniz. `std::fs::create_dir`, `std::path::Path::exists` ve `std::fs::remove_dir` fonksiyonları kullanılır.

```rust
use std::fs;
use std::path::Path;

fn main() {
    let dir = "test_dir";
    fs::create_dir(dir).unwrap();
    if Path::new(dir).exists() {
        println!("{} dizini oluşturuldu.", dir);
    }
    fs::remove_dir(dir).unwrap();
    if !Path::new(dir).exists() {
        println!("{} dizini silindi.", dir);
    }
}
```
