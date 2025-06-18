## 📘 Bölüm: Rust'ta Alan Özel Dilleri (DSL)  
### 🔹 Kategori: Enum ve desen eşleme ile içsel DSL tasarımı  
#### ✅ Cevap 891: Enum ve desen eşleme ile içsel DSL tasarımı

Rust'ta enum ve desen eşleme ile içsel DSL oluşturmak mümkündür. Örneğin, basit bir hesaplama DSL'i aşağıdaki gibi tanımlanabilir:

```rust
enum Expr {
    Add(i32, i32),
    Sub(i32, i32),
    Mul(i32, i32),
}

fn eval(expr: Expr) -> i32 {
    match expr {
        Expr::Add(a, b) => a + b,
        Expr::Sub(a, b) => a - b,
        Expr::Mul(a, b) => a * b,
    }
}

fn main() {
    let e = Expr::Add(2, 3);
    println!("Sonuç: {}", eval(e));
}
```

Bu örnekte, DSL enum ile tanımlanır ve desen eşleme ile çalıştırılır.
