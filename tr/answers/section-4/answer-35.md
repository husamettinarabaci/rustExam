## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Girdi İşleme  
#### ✅ Cevap 35: Girdiden tek karakter okuma

**Açıklama:**

Bir satır okunup ilk karakter `.chars().next()` ile alınabilir.

```rust
use std::io;

fn main() {
    let mut girdi = String::new();
    println!("Tek bir karakter girin:");
    io::stdin().read_line(&mut girdi).expect("Satır okunamadı");
    if let Some(kar) = girdi.trim().chars().next() {
        println!("Girdiğiniz karakter: {}", kar);
    } else {
        println!("Karakter girilmedi.");
    }
}
```
