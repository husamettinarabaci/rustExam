## 📘 Bölüm: Rust'ta Alan Özel Dilleri (DSL)
### 🔹 Kategori: DSL'e değişken, kapsam ve ortam ekleme
#### ✅ Cevap 899: DSL'e değişken, kapsam ve ortam ekleme

Çözümde, DSL'de değişken tanımlama ve kullanma desteği ile ortam (environment) yapısı örneklenmiştir.

```rust
use std::collections::HashMap;

#[derive(Debug)]
enum Expr {
    Num(i32),
    Var(String),
    Add(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr, env: &HashMap<String, i32>) -> i32 {
    match expr {
        Expr::Num(n) => *n,
        Expr::Var(name) => *env.get(name).unwrap(),
        Expr::Add(a, b) => eval(a, env) + eval(b, env),
    }
}

fn main() {
    let mut env = HashMap::new();
    env.insert("x".to_string(), 5);
    let expr = Expr::Add(Box::new(Expr::Var("x".to_string())), Box::new(Expr::Num(3)));
    println!("Sonuç: {}", eval(&expr, &env)); // Sonuç: 8
}
```
