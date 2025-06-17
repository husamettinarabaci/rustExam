## 📘 Section: Enums and Data Modeling  
### 🔹 Category: Pattern matching on enums  
#### ✅ Answer 422: Pattern matching on enums

Pattern matching on enums allows you to perform different actions based on the variant. The `match` statement is used to destructure and handle each variant.

```rust
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
}

fn area(shape: Shape) -> f64 {
    match shape {
        Shape::Circle(r) => 3.14 * r * r,
        Shape::Rectangle(w, h) => w * h,
    }
}
```
