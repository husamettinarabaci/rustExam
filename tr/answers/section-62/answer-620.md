## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Trait ve jeneriklerle tipli mini dil gömme  
#### ✅ Cevap 620: Trait ve jeneriklerle tipli mini dil gömme

Bu örnekte, DSL ifadeleri için bir trait tanımlanır ve farklı tipler için implementasyonlar yazılır. Böylece tip güvenliği sağlanır.

```rust
trait Eval {
    type Output;
    fn eval(&self) -> Self::Output;
}

struct Add<T: Eval, U: Eval> {
    left: T,
    right: U,
}

impl<T: Eval, U: Eval> Eval for Add<T, U> {
    type Output = i32;
    fn eval(&self) -> i32 {
        self.left.eval() + self.right.eval()
    }
}

impl Eval for i32 {
    type Output = i32;
    fn eval(&self) -> i32 { *self }
}

fn main() {
    let expr = Add { left: 2, right: 3 };
    println!("{}", expr.eval()); // 5
}
```
