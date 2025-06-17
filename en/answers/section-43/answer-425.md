## 📘 Section: Enums and Data Modeling  
### 🔹 Category: Adding traits like `Display` or `Debug` to enums  
#### ✅ Answer 425: Adding traits like `Display` or `Debug` to enums

The `Debug` trait can be automatically derived for enums. The `Display` trait must be implemented manually to customize how the enum is printed.

```rust
use std::fmt;

#[derive(Debug)]
enum Color {
    Red,
    Green,
    Blue,
}

impl fmt::Display for Color {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Color::Red => write!(f, "Red"),
            Color::Green => write!(f, "Green"),
            Color::Blue => write!(f, "Blue"),
        }
    }
}

fn main() {
    let c = Color::Red;
    println!("{:?}", c); // Debug
    println!("{}", c);  // Display
}
```
