## 📘 Bölüm: Rust'ta Alan Özel Dilleri (DSL)
### 🔹 Kategori: Gömülü DSL sözdizimi için makro kullanımı
#### ✅ Cevap 896: Gömülü DSL sözdizimi için makro kullanımı

Çözümde, aritmetik ifadeleri kolayca oluşturmak için bir Rust makrosu (`macro_rules!`) tanımlanmıştır. Bu makro, AST düğümlerini otomatik olarak üretir.

```rust
#[derive(Debug)]
enum AST {
    Num(i32),
    Add(Box<AST>, Box<AST>),
    Mul(Box<AST>, Box<AST>),
}

macro_rules! expr {
    ($a:expr + $b:expr) => {
        AST::Add(Box::new($a), Box::new($b))
    };
    ($a:expr * $b:expr) => {
        AST::Mul(Box::new($a), Box::new($b))
    };
    ($n:literal) => {
        AST::Num($n)
    };
}

fn main() {
    let ast = expr!(expr!(2) + expr!(expr!(3) * expr!(4)));
    println!("{:?}", ast);
    // Çıktı: Add(Num(2), Mul(Num(3), Num(4)))
}
```
