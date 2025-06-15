## 📘 Section: Enums I  
### 🔹 Category: Enum with Struct Variants  
#### ✅ Answer 108: Enum with struct variants

Struct variants in enums allow you to associate named fields with each variant. Here, the `Message` enum has two struct variants: `Move { x, y }` and `Write { text }`. Pattern matching is used to destructure and handle each variant.

```rust
enum Message {
    Move { x: i32, y: i32 },
    Write { text: String },
}

fn process(msg: Message) {
    match msg {
        Message::Move { x, y } => println!("Move to ({}, {})", x, y),
        Message::Write { text } => println!("Write: {}", text),
    }
}

fn main() {
    let m1 = Message::Move { x: 10, y: 20 };
    let m2 = Message::Write { text: String::from("Hello!") };
    process(m1);
    process(m2);
}
```
