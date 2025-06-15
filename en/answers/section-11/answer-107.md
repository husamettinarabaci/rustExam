# Answer 107

## 📘 Section: Enums I  
### 🔹 Category: Enum with Tuple Variants  
#### ✅ Answer 107: Enum with tuple variants

Tuple variants in enums allow you to associate data with each variant. Here, the `Shape` enum has two tuple variants: `Circle(f64)` and `Rectangle(f64, f64)`. Pattern matching is used to extract the values and compute the area accordingly.

```rust
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
}

fn area(shape: Shape) -> f64 {
    match shape {
        Shape::Circle(radius) => std::f64::consts::PI * radius * radius,
        Shape::Rectangle(width, height) => width * height,
    }
}

fn main() {
    let c = Shape::Circle(2.0);
    let r = Shape::Rectangle(3.0, 4.0);
    println!("Circle area: {:.2}", area(c));
    println!("Rectangle area: {:.2}", area(r));
}
```
