## 📘 Bölüm: Gömülü Alan-Özel Diller (DSL)
### 🔹 Kategori: Etkileşimli DSL'ler
#### ✅ Cevap 1267: Etkileşimli DSL'ler için REPL yazma

REPL, kullanıcıların DSL ifadelerini etkileşimli olarak girmesini ve değerlendirmesini sağlar. Aritmetik ifadeler için örnek:

```rust
use std::io::{self, Write};

fn eval(expr: &str) -> Result<i32, &'static str> {
    // Demo için: sadece tek tamsayı destekler
    expr.trim().parse().map_err(|_| "Ayrıştırma hatası")
}

fn main() {
    loop {
        print!("> ");
        io::stdout().flush().unwrap();
        let mut input = String::new();
        if io::stdin().read_line(&mut input).is_err() { break; }
        match eval(&input) {
            Ok(val) => println!("= {}", val),
            Err(e) => println!("Hata: {}", e),
        }
    }
}
```

Bu minimal bir REPL'dir; gerçek bir DSL için ayrıştırıcı gerekir.
