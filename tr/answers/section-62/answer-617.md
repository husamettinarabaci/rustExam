## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Mini DSL için REPL döngüsü yazma  
#### ✅ Cevap 617: Mini DSL için REPL döngüsü yazma

Bu örnekte, kullanıcıdan DSL ifadesi alan ve sonucu yazdıran basit bir REPL döngüsü yazılır. Gerçek bir DSL için parser ve evaluator fonksiyonları geliştirilebilir.

```rust
use std::io::{self, Write};

fn main() {
    loop {
        print!("> ");
        io::stdout().flush().unwrap();
        let mut input = String::new();
        if io::stdin().read_line(&mut input).is_err() {
            break;
        }
        let trimmed = input.trim();
        if trimmed == "exit" {
            break;
        }
        // Burada parse ve eval fonksiyonları çağrılır (örnek için doğrudan yazdırılıyor)
        println!("Girdi: {}", trimmed);
    }
}
```
