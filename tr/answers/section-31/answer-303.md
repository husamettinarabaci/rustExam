## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri  
### 🔹 Kategori: Enum Metotları ve Kullanımı  
#### ✅ Cevap 303: Enum tipleri için metotlar uygulama

Enumlar için `impl` bloğu ile metotlar tanımlanabilir. Bu metotlar, enumun içindeki verilere erişebilir veya enumun davranışını tanımlayabilir. Aşağıdaki örnekte, `Shape` adında iki varyantlı bir enum ve bu enum için bir alan hesaplama metodu (`area`) tanımlanmıştır.

```rust
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
}

impl Shape {
    fn area(&self) -> f64 {
        match self {
            Shape::Circle(radius) => std::f64::consts::PI * radius * radius,
            Shape::Rectangle(width, height) => width * height,
        }
    }
}

fn main() {
    let c = Shape::Circle(2.0);
    let r = Shape::Rectangle(3.0, 4.0);
    println!("Daire alanı: {}", c.area());
    println!("Dikdörtgen alanı: {}", r.area());
}
```
