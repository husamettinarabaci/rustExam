## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Trait Nesneleri ve Dinamik Dağıtım  
#### ✅ Cevap 203: Trait nesneleri kullanımı

Rust'ta trait nesneleri, aynı trait'i uygulayan farklı türleri tek bir koleksiyonda saklamanızı ve dinamik dağıtım ile metot çağırmanızı sağlar. Burada hem `Circle` hem de `Rectangle` yapıları `Shape` trait'ini uygular ve `Box<dyn Shape>` vektöründe saklanır. Her birinin `area()` metodu dinamik olarak çağrılır.

```rust
trait Shape {
    fn area(&self) -> f64;
}

struct Circle {
    radius: f64,
}

struct Rectangle {
    width: f64,
    height: f64,
}

impl Shape for Circle {
    fn area(&self) -> f64 {
        std::f64::consts::PI * self.radius * self.radius
    }
}

impl Shape for Rectangle {
    fn area(&self) -> f64 {
        self.width * self.height
    }
}

fn main() {
    let shapes: Vec<Box<dyn Shape>> = vec![
        Box::new(Circle { radius: 2.0 }),
        Box::new(Rectangle { width: 3.0, height: 4.0 }),
    ];

    for shape in shapes {
        println!("Alan: {}", shape.area());
    }
}
```
