## 📘 Bölüm: Rust'ta Alan Özel Dilleri (DSL)
### 🔹 Kategori: Trait ve jeneriklerle tipli mini dil gömme
#### ✅ Cevap 900: Trait ve jeneriklerle tipli mini dil gömme

Çözümde, trait ve jeneriklerle tip güvenli mini bir DSL oluşturulmuştur. Her işlem için ayrı trait tanımlanır ve uygulanır.

```rust
trait Add {
    fn add(self, rhs: Self) -> Self;
}

trait Mul {
    fn mul(self, rhs: Self) -> Self;
}

impl Add for i32 {
    fn add(self, rhs: Self) -> Self { self + rhs }
}

impl Mul for i32 {
    fn mul(self, rhs: Self) -> Self { self * rhs }
}

fn eval<T: Add + Mul + Copy>(a: T, b: T, c: T) -> T {
    a.add(b.mul(c))
}

fn main() {
    let result = eval(2, 3, 4); // 2 + 3 * 4
    println!("Sonuç: {}", result); // Sonuç: 14
}
```
