## 📘 Section: Modules I  
### 🔹 Category: Module Constants  
#### ✅ Answer 130: Module constants

Rust modules can contain constants using the `const` keyword. Constants are always immutable and must have a type annotation. You can access a module constant using the module path.

```rust
mod math {
    pub const PI: f64 = 3.14159;
    pub fn circle_area(radius: f64) -> f64 {
        PI * radius * radius
    }
}

fn main() {
    println!("PI = {}", math::PI);
    println!("Area = {}", math::circle_area(2.0));
}
```
