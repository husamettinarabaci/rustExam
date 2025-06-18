## 📘 Bölüm: Gömülü Alan-Özel Diller (DSL)
### 🔹 Kategori: AST Oluşturma
#### ✅ Cevap 1263: Gömülü DSL'ler için AST oluşturma

Bir DSL'yi AST olarak Rust enum ve struct'larıyla modelleyebilirsiniz. Aşağıda aritmetik ifadeler için bir örnek verilmiştir:

```rust
enum Expr {
    Lit(i32),
    Add(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
}

fn eval(expr: &Expr) -> i32 {
    match expr {
        Expr::Lit(n) => *n,
        Expr::Add(a, b) => eval(a) + eval(b),
        Expr::Mul(a, b) => eval(a) * eval(b),
    }
}

fn main() {
    let expr = Expr::Add(
        Box::new(Expr::Lit(1)),
        Box::new(Expr::Mul(Box::new(Expr::Lit(2)), Box::new(Expr::Lit(3))))
    );
    println!("Sonuç: {}", eval(&expr));
}
```

Bu örnek, `1 + 2 * 3` ifadesini modelleyip değerlendirir.
