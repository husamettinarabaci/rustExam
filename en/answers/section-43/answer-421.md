## 📘 Section: Enums and Data Modeling  
### 🔹 Category: Defining enums with simple and complex variants  
#### ✅ Answer 421: Defining enums with simple and complex variants

Rust enums can have both simple (unit-like) and complex (data-carrying) variants. This allows you to represent different kinds of data under a single type.

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn main() {
    let m1 = Message::Quit;
    let m2 = Message::Move { x: 10, y: 20 };
    let m3 = Message::Write(String::from("Hello"));
    let m4 = Message::ChangeColor(255, 0, 0);
}
```
