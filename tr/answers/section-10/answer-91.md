## 📘 Bölüm: Yapılar II  
### 🔹 Kategori: `impl` ile metot tanımlama  
#### ✅ Cevap 91: `impl` ile metot tanımlama

Rust'ta metotlar, bir yapı için `impl` bloğu içinde tanımlanır. Burada, `Circle` adında bir yapı ve ona ait bir `area` metodu tanımlanmıştır. Bu metot, dairenin alanını hesaplar.

```rust
struct Circle {
    radius: f64,
}

impl Circle {
    fn area(&self) -> f64 {
        std::f64::consts::PI * self.radius * self.radius
    }
}

fn main() {
    let c = Circle { radius: 3.0 };
    println!("Alan: {}", c.area());
}
```
