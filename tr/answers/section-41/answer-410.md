## 📘 Bölüm: Dosya G/Ç ve Dosya Sistemi  
### 🔹 Kategori: G/Ç Hatalarını Zarifçe Yönetme  
#### ✅ Cevap 410: Result ile G/Ç hatalarını zarifçe yönetme

Bu soruda, dosya işlemlerinde oluşan hataları `Result` ile yönetmeyi öğrendiniz. Hata durumunda kullanıcıya anlamlı bir mesaj gösterilir.

```rust
use std::fs::File;

fn main() {
    match File::open("yok.txt") {
        Ok(_) => println!("Dosya açıldı."),
        Err(e) => println!("Dosya açılamadı: {}", e),
    }
}
```
