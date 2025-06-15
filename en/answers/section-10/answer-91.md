## 📘 Section: Structs II  
### 🔹 Category: Implementing methods with `impl`  
#### ✅ Answer 91: Implementing methods with `impl`

In Rust, methods are defined within an `impl` block for a struct. Here, we define a `Circle` struct and implement an `area` method that calculates the area of the circle.

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
    println!("Area: {}", c.area());
}
```
