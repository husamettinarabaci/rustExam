## 📘 Section: Enums, Variants, and Algebraic Data Types
### 🔹 Category: Data-Carrying Enums
#### ✅ Answer 301: Defining custom enums with data-carrying variants

This problem demonstrates how to define an enum with multiple data-carrying variants in Rust. Each variant can hold different types of data. By creating instances and matching on them, you can extract and use the contained values. Enums are powerful for modeling data that can take on several forms.

```rust
// Define an enum with different data-carrying variants
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(u8, u8, u8),
}

fn main() {
    let messages = [
        Message::Quit,
        Message::Move { x: 10, y: 20 },
        Message::Write(String::from("Hello, Rust!")),
        Message::ChangeColor(255, 0, 0),
    ];

    for msg in &messages {
        match msg {
            Message::Quit => println!("Quit message"),
            Message::Move { x, y } => println!("Move to: x={}, y={}", x, y),
            Message::Write(text) => println!("Write: {}", text),
            Message::ChangeColor(r, g, b) => println!("Change color to: {}, {}, {}", r, g, b),
        }
    }
}
```
