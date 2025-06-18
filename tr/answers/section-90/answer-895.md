## 📘 Bölüm: Rust'ta Alan Özel Dilleri (DSL)
### 🔹 Kategori: Desen eşleme ile ifadeleri değerlendirme
#### ✅ Cevap 895: Desen eşleme ile ifadeleri değerlendirme

Çözümde, AST üzerinde desen eşleme ile aritmetik ifadeleri değerlendiren bir fonksiyon yazılmıştır. Bu fonksiyon özyinelemeli olarak çalışır.

```rust
#[derive(Debug)]
enum AST {
    Num(i32),
    Add(Box<AST>, Box<AST>),
    Mul(Box<AST>, Box<AST>),
}

fn eval(ast: &AST) -> i32 {
    match ast {
        AST::Num(n) => *n,
        AST::Add(a, b) => eval(a) + eval(b),
        AST::Mul(a, b) => eval(a) * eval(b),
    }
}

fn main() {
    let ast = AST::Add(
        Box::new(AST::Num(2)),
        Box::new(AST::Mul(Box::new(AST::Num(3)), Box::new(AST::Num(4))))
    );
    println!("Sonuç: {}", eval(&ast)); // Sonuç: 14
}
```
