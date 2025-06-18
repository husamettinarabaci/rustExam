## 📘 Section: Advanced Trait Design and Usage
### 🔹 Category: Trait Objects and Dynamic Dispatch
#### ✅ Answer 624: Implementing trait objects with dynamic dispatch

Trait objects allow for dynamic dispatch in Rust, enabling you to call methods on types that implement a trait without knowing the concrete type at compile time. You use `&dyn Trait` or `Box<dyn Trait>` for this purpose. Only object-safe traits can be used as trait objects.

```rust
trait Shape {
    fn area(&self) -> f64;
}

struct Circle { radius: f64 }
struct Square { side: f64 }

impl Shape for Circle {
    fn area(&self) -> f64 { std::f64::consts::PI * self.radius * self.radius }
}
impl Shape for Square {
    fn area(&self) -> f64 { self.side * self.side }
}

fn print_area(shape: &dyn Shape) {
    println!("Area: {}", shape.area());
}

fn main() {
    let c = Circle { radius: 2.0 };
    let s = Square { side: 3.0 };
    print_area(&c);
    print_area(&s);
}
```
