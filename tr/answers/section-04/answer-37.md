## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Terminal Girişi  
#### ✅ Cevap 37: İstemli (prompt) giriş okuma

**Açıklama:**

Kullanıcıdan girdi almadan önce ekrana bir istem mesajı yazdırmak için `print!` ve ardından `flush()` kullanılabilir.

```rust
use std::io;

fn main() {
    let mut girdi = String::new();
    print!("Lütfen adınızı girin: ");
    use std::io::Write;
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut girdi).expect("Satır okunamadı");
    println!("Merhaba, {}!", girdi.trim());
}
```
