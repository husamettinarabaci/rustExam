## 📘 Section: Enums, Variants, and Algebraic Data Types  
### 🔹 Category: Enum Methods and Usage  
#### ✅ Answer 304: Matching enum variants with shared logic

To process all variants of an enum with a single function or method, use a `match` expression. In the example below, a `Message` enum with different data for each variant is defined, and a `call` method is implemented to print a message for each variant.

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    fn call(&self) {
        match self {
            Message::Quit => println!("Quitting..."),
            Message::Move { x, y } => println!("Move to: x={}, y={}", x, y),
            Message::Write(text) => println!("Write: {}", text),
            Message::ChangeColor(r, g, b) => println!("Change color to: {}, {}, {}", r, g, b),
        }
    }
}

fn main() {
    let m1 = Message::Quit;
    let m2 = Message::Move { x: 10, y: 20 };
    let m3 = Message::Write(String::from("Hello!"));
    let m4 = Message::ChangeColor(255, 0, 0);
    m1.call();
    m2.call();
    m3.call();
    m4.call();
}
```
