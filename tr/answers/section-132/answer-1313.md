## 📘 Bölüm: Gömülü DSL'ler: Ayrıştırma ve Derleme
### 🔹 Kategori: Özyinelemeli Ayrıştırıcılar
#### ✅ Cevap 1313: Özyinelemeli ayrıştırıcılar implementasyonu

Bu örnekte, toplama ve çarpma işlemlerini özyinelemeli olarak ayrıştıran basit bir fonksiyon gösterilmiştir. Gerçek bir parser için daha gelişmiş bir yaklaşım gerekir.

```rust
fn eval(expr: &str) -> i32 {
    if let Some(idx) = expr.find('+') {
        let (left, right) = expr.split_at(idx);
        return eval(left) + eval(&right[1..]);
    }
    if let Some(idx) = expr.find('*') {
        let (left, right) = expr.split_at(idx);
        return eval(left) * eval(&right[1..]);
    }
    expr.trim().parse().unwrap_or(0)
}

fn main() {
    let expr = "2+3*4";
    println!("{}", eval(expr)); // 14
}
```
