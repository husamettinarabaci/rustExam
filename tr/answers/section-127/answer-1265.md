## 📘 Bölüm: Gömülü Alan-Özel Diller (DSL)
### 🔹 Kategori: DSL Genişletmeleri
#### ✅ Cevap 1265: DSL'lere değişkenler ve kapsamlar ekleme

Değişken ve kapsam desteği için AST'ye `Var` varyantı ekleyip ortam olarak `HashMap` kullanabilirsiniz:

```rust
use std::collections::HashMap;

enum Expr {
    Lit(i32),
    Var(String),
    Add(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr, env: &HashMap<String, i32>) -> i32 {
    match expr {
        Expr::Lit(n) => *n,
        Expr::Var(name) => *env.get(name).unwrap(),
        Expr::Add(a, b) => eval(a, env) + eval(b, env),
    }
}

fn main() {
    let mut env = HashMap::new();
    env.insert("x".to_string(), 5);
    let expr = Expr::Add(Box::new(Expr::Var("x".to_string())), Box::new(Expr::Lit(3)));
    println!("Sonuç: {}", eval(&expr, &env));
}
```

Bu kod, `x = 5` için `x + 3` ifadesini değerlendirir.
