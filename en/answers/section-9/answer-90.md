## 📘 Section: Structs I  
### 🔹 Category: Structs with associated functions  
#### ✅ Answer 90: Structs with associated functions

Associated functions in Rust are functions defined within an `impl` block that are not tied to a specific instance. They are often used as constructors. Here, we define a `Rectangle` struct and implement a `new` associated function to create instances.

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    // Associated function (constructor)
    fn new(width: u32, height: u32) -> Self {
        Self { width, height }
    }
}

fn main() {
    let rect = Rectangle::new(30, 50);
    println!("Rectangle: {} x {}", rect.width, rect.height);
}
```
