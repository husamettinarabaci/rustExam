## 📘 Section: Enums, Variants, and Algebraic Data Types  
### 🔹 Category: Enum Methods and Usage  
#### ✅ Answer 303: Implementing methods for enum types

You can define methods for enums using an `impl` block. These methods can access the data inside the enum or define behavior for the enum. In the example below, a `Shape` enum with two variants is defined, and an `area` method is implemented to calculate the area for each shape.

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
    println!("Circle area: {}", c.area());
    println!("Rectangle area: {}", r.area());
}
```
