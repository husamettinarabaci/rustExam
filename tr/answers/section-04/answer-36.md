## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Girdi İşleme  
#### ✅ Cevap 36: EOF'ya kadar okuma

**Açıklama:**

Bir döngü ve `io::stdin().read_line()` ile EOF'ya kadar okuma yapılabilir.

```rust
use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    for satir in stdin.lock().lines() {
        match satir {
            Ok(s) => println!("Satır: {}", s),
            Err(_) => break,
        }
    }
}
```
