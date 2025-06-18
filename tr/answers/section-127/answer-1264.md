## 📘 Bölüm: Gömülü Alan-Özel Diller (DSL)
### 🔹 Kategori: İfade Değerlendirme
#### ✅ Cevap 1264: Desen eşleme ile ifadeleri değerlendirme

Desen eşleme, AST'leri değerlendirmek için idealdir. Aşağıda aritmetik ifadeler için özyinelemeli bir değerlendirme fonksiyonu verilmiştir:

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
    let expr = Expr::Add(Box::new(Expr::Lit(2)), Box::new(Expr::Mul(Box::new(Expr::Lit(3)), Box::new(Expr::Lit(4)))));
    println!("Sonuç: {}", eval(&expr));
}
```

Bu kod, `2 + 3 * 4` ifadesinin sonucunu yazdırır.
