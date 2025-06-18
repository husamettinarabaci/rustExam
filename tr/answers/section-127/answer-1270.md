## 📘 Bölüm: Gömülü Alan-Özel Diller (DSL)
### 🔹 Kategori: DSL Performans Optimizasyonu
#### ✅ Cevap 1270: DSL yürütme performansını optimize etme

Yaygın bir optimizasyon, sabit katlama ile AST'deki sabit alt ifadeleri değerlendirmektir:

```rust
enum Expr {
    Lit(i32),
    Add(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
}

fn sabit_katla(expr: Expr) -> Expr {
    match expr {
        Expr::Add(a, b) => {
            let a = sabit_katla(*a);
            let b = sabit_katla(*b);
            match (&a, &b) {
                (Expr::Lit(x), Expr::Lit(y)) => Expr::Lit(x + y),
                _ => Expr::Add(Box::new(a), Box::new(b)),
            }
        }
        Expr::Mul(a, b) => {
            let a = sabit_katla(*a);
            let b = sabit_katla(*b);
            match (&a, &b) {
                (Expr::Lit(x), Expr::Lit(y)) => Expr::Lit(x * y),
                _ => Expr::Mul(Box::new(a), Box::new(b)),
            }
        }
        e => e,
    }
}
```

Bu teknik, sabit ifadeleri önceden hesaplayarak çalışma zamanı maliyetini azaltır.
