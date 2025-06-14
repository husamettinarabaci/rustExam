## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Dosya Girişi  
#### ✅ Cevap 40: Dosyadan giriş okuma

**Açıklama:**

`std::fs::read_to_string` ile bir dosyanın içeriği okunabilir.

```rust
use std::fs;

fn main() {
    let icerik = fs::read_to_string("input.txt")
        .expect("Dosya okunamadı");
    println!("Dosya içeriği:\n{}", icerik);
}
```
