## 📘 Section: Structs I  
### 🔹 Category: Structs with Methods  
#### ✅ Answer 89: Structs with methods

Methods in Rust are defined in an `impl` block for a struct. Here, we implement an `area` method for `Rectangle` and call it on an instance.

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect = Rectangle { width: 5, height: 3 };
    println!("Area: {}", rect.area());
}
```
