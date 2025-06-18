## 📘 Bölüm: Gömülü Alan-Özel Diller (DSL)
### 🔹 Kategori: DSL'de Hata Yönetimi
#### ✅ Cevap 1269: DSL'lerde hata yönetimi ve tanılama

Hata yönetimi için değerlendiricinizden `Result` döndürüp tanımsız değişken gibi hataları yönetin:

```rust
use std::collections::HashMap;

enum Expr {
    Lit(i32),
    Var(String),
    Add(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr, env: &HashMap<String, i32>) -> Result<i32, String> {
    match expr {
        Expr::Lit(n) => Ok(*n),
        Expr::Var(name) => env.get(name).cloned().ok_or(format!("Tanımsız değişken: {}", name)),
        Expr::Add(a, b) => Ok(eval(a, env)? + eval(b, env)?),
    }
}

fn main() {
    let env = HashMap::new();
    let expr = Expr::Add(Box::new(Expr::Var("x".to_string())), Box::new(Expr::Lit(3)));
    match eval(&expr, &env) {
        Ok(val) => println!("Sonuç: {}", val),
        Err(e) => println!("Hata: {}", e),
    }
}
```

Bu kodda, `x` tanımsızsa hata mesajı yazdırılır.
