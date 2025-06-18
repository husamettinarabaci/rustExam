## 📘 Bölüm: Gömülü DSL'ler: Ayrıştırma ve Derleme
### 🔹 Kategori: DSL Çalışma Zamanı Performansını Optimize Etme
#### ✅ Cevap 1317: DSL çalışma zamanı performansını optimize etme

Bu örnekte, AST'yi önceden oluşturarak ve bir HashMap ile önbellek kullanarak tekrar eden hesaplamaların önüne geçilmiştir.

```rust
use std::collections::HashMap;

#[derive(Debug, Clone, PartialEq, Eq, Hash)]
enum Expr {
    Number(i32),
    Add(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr, cache: &mut HashMap<Expr, i32>) -> i32 {
    if let Some(&v) = cache.get(expr) {
        return v;
    }
    let result = match expr {
        Expr::Number(n) => *n,
        Expr::Add(a, b) => eval(a, cache) + eval(b, cache),
    };
    cache.insert(expr.clone(), result);
    result
}

fn main() {
    let expr = Expr::Add(Box::new(Expr::Number(2)), Box::new(Expr::Number(3)));
    let mut cache = HashMap::new();
    println!("{}", eval(&expr, &mut cache)); // 5
}
```
