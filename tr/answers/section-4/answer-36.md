## 📘 Bölüm: G/Ç Temelleri  
### 🔹 Kategori: Girdi İşleme  
#### ✅ Cevap 36: EOF'ya kadar okuma

**Açıklama:**

Bir döngü ve `io::stdin().read_line()` ile EOF'ya kadar okuma yapılabilir.

```rust
use std::io::{self, Write};

fn main() {
    let mut satir = String::new();
    let stdin = io::stdin();

    loop {
        satir.clear();
        let okunan = stdin.read_line(&mut satir).unwrap();

        if okunan == 0 {
            // EOF (Ctrl+D veya Ctrl+Z) alındı
            break;
        }

        print!("Satır: {}", satir);
        io::stdout().flush().unwrap(); // Anında çıktı için
    }
}

```
