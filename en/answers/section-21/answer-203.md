## 📘 Section: Traits I  
### 🔹 Category: Trait Objects and Dynamic Dispatch  
#### ✅ Answer 203: Using trait objects

Trait objects in Rust allow for dynamic dispatch, enabling you to store different types that implement the same trait in a single collection. Here, both `Circle` and `Rectangle` implement the `Shape` trait, and we use a vector of `Box<dyn Shape>` to store them. Calling `area()` on each element uses dynamic dispatch.

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
        println!("Area: {}", shape.area());
    }
}
```
