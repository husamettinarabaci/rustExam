## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Desen eşleme ile ifadeleri değerlendirme  
#### ✅ Cevap 614: Desen eşleme ile ifadeleri değerlendirme

Bu çözümde, enum tabanlı AST üzerinde pattern matching ile gezilerek ifade değerlendirilir. Her varyant için uygun işlem yapılır.

```rust
#[derive(Debug)]
enum Expr {
    Number(i32),
    Add(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr) -> i32 {
    match expr {
        Expr::Number(n) => *n,
        Expr::Add(a, b) => eval(a) + eval(b),
        Expr::Mul(a, b) => eval(a) * eval(b),
    }
}

fn main() {
    let ast = Expr::Add(
        Box::new(Expr::Number(1)),
        Box::new(Expr::Mul(
            Box::new(Expr::Number(2)),
            Box::new(Expr::Number(3)),
        )),
    );
    println!("{}", eval(&ast));
}
```
