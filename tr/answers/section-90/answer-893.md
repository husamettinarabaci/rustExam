## 📘 Bölüm: Rust'ta Alan Özel Dilleri (DSL)
### 🔹 Kategori: Özyinelemeli ayrıştırıcı ile ifade dili ayrıştırma
#### ✅ Cevap 893: Özyinelemeli ayrıştırıcı ile ifade dili ayrıştırma

Çözümde, token vektöründen özyinelemeli olarak bir AST oluşturan basit bir parser fonksiyonu yazılmıştır. Bu, aritmetik ifadelerde işlem önceliğini de dikkate alır.

```rust
#[derive(Debug, PartialEq)]
enum Token {
    Number(i32),
    Plus,
    Minus,
    Star,
    Slash,
}

#[derive(Debug)]
enum Expr {
    Num(i32),
    Add(Box<Expr>, Box<Expr>),
    Sub(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
    Div(Box<Expr>, Box<Expr>),
}

// ... Tokenizer fonksiyonu yukarıdaki gibi ...

fn parse_expr(tokens: &[Token]) -> (Expr, usize) {
    parse_add_sub(tokens, 0)
}

fn parse_add_sub(tokens: &[Token], mut pos: usize) -> (Expr, usize) {
    let (mut left, mut pos) = parse_mul_div(tokens, pos);
    while pos < tokens.len() {
        match &tokens[pos] {
            Token::Plus => {
                let (right, new_pos) = parse_mul_div(tokens, pos + 1);
                left = Expr::Add(Box::new(left), Box::new(right));
                pos = new_pos;
            }
            Token::Minus => {
                let (right, new_pos) = parse_mul_div(tokens, pos + 1);
                left = Expr::Sub(Box::new(left), Box::new(right));
                pos = new_pos;
            }
            _ => break,
        }
    }
    (left, pos)
}

fn parse_mul_div(tokens: &[Token], mut pos: usize) -> (Expr, usize) {
    let (mut left, mut pos) = parse_primary(tokens, pos);
    while pos < tokens.len() {
        match &tokens[pos] {
            Token::Star => {
                let (right, new_pos) = parse_primary(tokens, pos + 1);
                left = Expr::Mul(Box::new(left), Box::new(right));
                pos = new_pos;
            }
            Token::Slash => {
                let (right, new_pos) = parse_primary(tokens, pos + 1);
                left = Expr::Div(Box::new(left), Box::new(right));
                pos = new_pos;
            }
            _ => break,
        }
    }
    (left, pos)
}

fn parse_primary(tokens: &[Token], pos: usize) -> (Expr, usize) {
    match &tokens[pos] {
        Token::Number(n) => (Expr::Num(*n), pos + 1),
        _ => panic!("Beklenmeyen token"),
    }
}

fn main() {
    let tokens = vec![
        Token::Number(2),
        Token::Plus,
        Token::Number(3),
        Token::Star,
        Token::Number(4),
    ];
    let (ast, _) = parse_expr(&tokens);
    println!("{:?}", ast);
    // Çıktı: Add(Num(2), Mul(Num(3), Num(4)))
}
```
