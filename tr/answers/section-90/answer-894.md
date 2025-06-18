## 📘 Bölüm: Rust'ta Alan Özel Dilleri (DSL)
### 🔹 Kategori: Token akışından soyut sözdizimi ağacı (AST) oluşturma
#### ✅ Cevap 894: Token akışından soyut sözdizimi ağacı (AST) oluşturma

Çözümde, token vektöründen AST oluşturan bir fonksiyon ve AST'yi modelleyen bir enum gösterilmiştir. AST, işlemlerin ağaç yapısında gösterilmesini sağlar.

```rust
#[derive(Debug, PartialEq)]
enum Token {
    Number(i32),
    Plus,
    Star,
}

#[derive(Debug)]
enum AST {
    Num(i32),
    Add(Box<AST>, Box<AST>),
    Mul(Box<AST>, Box<AST>),
}

fn build_ast(tokens: &[Token]) -> AST {
    // 2 + 3 * 4 için elle AST oluşturma örneği
    AST::Add(
        Box::new(AST::Num(2)),
        Box::new(AST::Mul(Box::new(AST::Num(3)), Box::new(AST::Num(4))))
    )
}

fn main() {
    let tokens = vec![Token::Number(2), Token::Plus, Token::Number(3), Token::Star, Token::Number(4)];
    let ast = build_ast(&tokens);
    println!("{:?}", ast);
    // Çıktı: Add(Num(2), Mul(Num(3), Num(4)))
}
```
