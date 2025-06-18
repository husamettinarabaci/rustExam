## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Terminal Girişi  
#### ✅ Cevap 31: Terminalden satır okuma

**Açıklama:**

Rust'ta `std::io::stdin().read_line()` ile terminalden giriş alınabilir.

```rust
use std::io;

fn main() {
    let mut girdi = String::new();
    println!("Bir satır girin:");
    io::stdin().read_line(&mut girdi).expect("Satır okunamadı");
    println!("Girdiğiniz: {}", girdi.trim());
}
```
