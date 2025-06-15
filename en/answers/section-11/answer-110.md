## 📘 Section: Enums I  
### 🔹 Category: Enum with Associated Functions  
#### ✅ Answer 110: Enum with associated functions

Associated functions can be implemented for enums using an `impl` block. Here, the `Color` enum has a `from_str` function that constructs a `Color` from a string. Pattern matching is used to map the string to the correct variant.

```rust
enum Color {
    Red,
    Green,
    Blue,
}

impl Color {
    fn from_str(s: &str) -> Color {
        match s {
            "red" => Color::Red,
            "green" => Color::Green,
            "blue" => Color::Blue,
            _ => Color::Red, // default
        }
    }
}

fn main() {
    let color = Color::from_str("green");
    match color {
        Color::Red => println!("Color is Red"),
        Color::Green => println!("Color is Green"),
        Color::Blue => println!("Color is Blue"),
    }
}
```
