## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Girdi Ayrıştırma  
#### ✅ Cevap 38: Ondalıklı sayı okuma ve çevirme

**Açıklama:**

Bir string girdiyi ondalıklı sayıya çevirmek için `.trim().parse::<f64>()` kullanılabilir.

```rust
use std::io;

fn main() {
    let mut girdi = String::new();
    println!("Ondalıklı bir sayı girin:");
    io::stdin().read_line(&mut girdi).expect("Satır okunamadı");
    let sayi: f64 = girdi.trim().parse().expect("Geçersiz ondalıklı sayı");
    println!("Girdiğiniz sayı: {}", sayi);
}
```
