## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Girdi İşleme  
#### ✅ Cevap 34: Girdiden boşlukları temizleme

**Açıklama:**

`.trim()` metodu, bir stringin başındaki ve sonundaki boşlukları temizler.

```rust
use std::io;

fn main() {
    let mut girdi = String::new();
    println!("Başı ve sonu boşluklu bir metin girin:");
    io::stdin().read_line(&mut girdi).expect("Satır okunamadı");
    println!("Temizlenmiş: '{}'", girdi.trim());
}
```
