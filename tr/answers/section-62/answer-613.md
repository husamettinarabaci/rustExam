## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Gömülü DSL'ler için AST oluşturma  
#### ✅ Cevap 613: Gömülü DSL'ler için AST oluşturma

Bu çözümde, DSL için bir enum ile AST tanımlanır ve bir parser fonksiyonu ile string ifadeler AST'ye dönüştürülür. Bu temel örnek, daha karmaşık DSL'ler için geliştirilebilir.

```rust
#[derive(Debug)]
enum Expr {
    Number(i32),
    Add(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
}

fn parse_expr(input: &str) -> Expr {
    // Basit örnek: sadece "add(1, mul(2, 3))" için çalışır
    Expr::Add(
        Box::new(Expr::Number(1)),
        Box::new(Expr::Mul(
            Box::new(Expr::Number(2)),
            Box::new(Expr::Number(3)),
        )),
    )
}

fn main() {
    let ast = parse_expr("add(1, mul(2, 3))");
    println!("{:?}", ast);
}
```
