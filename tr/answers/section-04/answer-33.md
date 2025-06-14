## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Hata Yönetimi  
#### ✅ Cevap 33: Girdi hatalarını düzgün şekilde ele alma

**Açıklama:**

`match` ile çevirme hatalarını panikletmeden yönetebilirsiniz.

```rust
use std::io;

fn main() {
    let mut girdi = String::new();
    println!("Bir sayı girin:");
    io::stdin().read_line(&mut girdi).expect("Satır okunamadı");
    match girdi.trim().parse::<i32>() {
        Ok(sayi) => println!("Girdiğiniz sayı: {}", sayi),
        Err(_) => println!("Geçersiz giriş! Lütfen geçerli bir sayı girin."),
    }
}
```
