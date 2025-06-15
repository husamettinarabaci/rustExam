## 📘 Section: Modules I  
### 🔹 Category: Module Visibility Basics  
#### ✅ Answer 125: Module visibility basics

In Rust, functions in a module are private by default. To make a function accessible from outside the module, use the `pub` keyword. Here, `area` is public and can be called from `main`, but `perimeter` is private and cannot be accessed outside the module.

```rust
mod shapes {
    pub fn area() -> i32 {
        10
    }
    fn perimeter() -> i32 {
        20
    }
}

fn main() {
    println!("Area: {}", shapes::area());
    // The following line would cause a compile error:
    // println!("Perimeter: {}", shapes::perimeter());
}
```
