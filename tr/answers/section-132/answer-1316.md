## 📘 Bölüm: Gömülü DSL'ler: Ayrıştırma ve Derleme
### 🔹 Kategori: DSL'leri Ara Temsile Derleme
#### ✅ Cevap 1316: DSL'leri ara temsile derleme

Bu örnekte, bir DSL ifadesinden basit bir AST (soyut sözdizimi ağacı) oluşturan temel bir fonksiyon gösterilmiştir.

```rust
#[derive(Debug)]
enum Expr {
    Number(i32),
    Add(Box<Expr>, Box<Expr>),
}

fn parse_ast(tokens: &[&str]) -> Option<Expr> {
    if tokens.len() == 3 && tokens[0] == "add" {
        let left = Expr::Number(tokens[1].parse().ok()?);
        let right = Expr::Number(tokens[2].parse().ok()?);
        Some(Expr::Add(Box::new(left), Box::new(right)))
    } else {
        None
    }
}

fn main() {
    let tokens = vec!["add", "1", "2"];
    let ast = parse_ast(&tokens);
    println!("{:?}", ast);
}
```
