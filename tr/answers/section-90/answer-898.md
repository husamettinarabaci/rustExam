## 📘 Bölüm: Rust'ta Alan Özel Dilleri (DSL)
### 🔹 Kategori: Mini DSL için REPL döngüsü yazma
#### ✅ Cevap 898: Mini DSL için REPL döngüsü yazma

Çözümde, kullanıcıdan aritmetik ifade alıp değerlendiren basit bir REPL döngüsü örneği verilmiştir.

```rust
use std::io::{self, Write};

// Token, AST ve tokenizer/parser fonksiyonları yukarıdaki gibi varsayılmıştır.

fn main() {
    loop {
        print!("> ");
        io::stdout().flush().unwrap();
        let mut input = String::new();
        if io::stdin().read_line(&mut input).is_err() { break; }
        let tokens = tokenize(&input.trim());
        let (ast, _) = parse_expr(&tokens);
        let result = eval(&ast);
        println!("Sonuç: {}", result);
    }
}
```
