## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Girdi Ayrıştırma  
#### ✅ Cevap 32: Kullanıcı girdisini sayıya çevirme

**Açıklama:**

Bir string girdiyi tamsayıya çevirmek için `.trim().parse::<i32>()` kullanılabilir.

```rust
use std::io;

fn main() {
    let mut girdi = String::new();
    println!("Bir sayı girin:");
    io::stdin().read_line(&mut girdi).expect("Satır okunamadı");
    let sayi: i32 = girdi.trim().parse().expect("Geçersiz sayı");
    println!("Girdiğiniz sayı: {}", sayi);
}
```
