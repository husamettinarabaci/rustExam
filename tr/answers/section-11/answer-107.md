# Cevap 107

## 📘 Bölüm: Enumlar I  
### 🔹 Kategori: Demet Varyantlı Enum  
#### ✅ Cevap 107: Demet varyantlı enum

Enum'larda demet varyantları, her varyant ile veri ilişkilendirmeye olanak tanır. Burada `Shape` enum'u iki demet varyantına sahiptir: `Circle(f64)` ve `Rectangle(f64, f64)`. Desen eşleme ile değerler alınır ve alan hesaplanır.

```rust
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
}

fn alan(sekil: Shape) -> f64 {
    match sekil {
        Shape::Circle(yaricap) => std::f64::consts::PI * yaricap * yaricap,
        Shape::Rectangle(genislik, yukseklik) => genislik * yukseklik,
    }
}

fn main() {
    let c = Shape::Circle(2.0);
    let r = Shape::Rectangle(3.0, 4.0);
    println!("Daire alanı: {:.2}", alan(c));
    println!("Dikdörtgen alanı: {:.2}", alan(r));
}
```
