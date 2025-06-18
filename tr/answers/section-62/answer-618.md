## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: DSL'e değişken, kapsam ve ortam ekleme  
#### ✅ Cevap 618: DSL'e değişken, kapsam ve ortam ekleme

Bu örnekte, DSL AST'ye değişken tanımı ve kullanımı eklenir. Ortam için bir HashMap kullanılır. Değişken atama ve kullanımı gösterilir.

```rust
use std::collections::HashMap;

#[derive(Debug)]
enum Expr {
    Number(i32),
    Var(String),
    Assign(String, Box<Expr>),
    Add(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr, env: &mut HashMap<String, i32>) -> i32 {
    match expr {
        Expr::Number(n) => *n,
        Expr::Var(name) => *env.get(name).unwrap_or(&0),
        Expr::Assign(name, val) => {
            let v = eval(val, env);
            env.insert(name.clone(), v);
            v
        },
        Expr::Add(a, b) => eval(a, env) + eval(b, env),
    }
}

fn main() {
    let mut env = HashMap::new();
    let assign = Expr::Assign("x".to_string(), Box::new(Expr::Number(5)));
    let add = Expr::Add(Box::new(Expr::Var("x".to_string())), Box::new(Expr::Number(2)));
    eval(&assign, &mut env);
    println!("{}", eval(&add, &mut env)); // 7
}
```
