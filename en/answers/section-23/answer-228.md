## 📘 Section: Generics II  
### 🔹 Category: Generic trait objects  
#### ✅ Answer 228: Using generic trait objects

This example demonstrates how to use trait objects to store and work with multiple types that implement the same trait. The `Shape` trait is implemented for both `Circle` and `Rectangle`. A vector of boxed trait objects is used to store different shapes, and their areas are printed using dynamic dispatch.

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

fn print_area(shape: &dyn Shape) {
    println!("Area: {}", shape.area());
}

fn main() {
    let shapes: Vec<Box<dyn Shape>> = vec![
        Box::new(Circle { radius: 2.0 }),
        Box::new(Rectangle { width: 3.0, height: 4.0 }),
    ];
    for shape in shapes.iter() {
        print_area(&**shape);
    }
}
```
