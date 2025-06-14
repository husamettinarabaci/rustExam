## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Girdi İşleme  
#### ✅ Cevap 39: Girdiyi bir vektöre okuma

**Açıklama:**

Girdi stringi bölünüp her parça tamsayıya çevrilerek bir vektör oluşturulabilir.

```rust
use std::io;

fn main() {
    let mut girdi = String::new();
    println!("Boşluklarla ayrılmış sayılar girin:");
    io::stdin().read_line(&mut girdi).expect("Satır okunamadı");
    let sayilar: Vec<i32> = girdi.trim().split_whitespace()
        .map(|s| s.parse().expect("Geçersiz sayı"))
        .collect();
    println!("Vektör: {:?}", sayilar);
}
```
