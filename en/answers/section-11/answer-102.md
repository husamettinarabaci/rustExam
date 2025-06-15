## 📘 Section: Enums I  
### 🔹 Category: Enum Variants with Data  
#### ✅ Answer 102: Enum with data attached to variants

This example shows how to define an enum with a data-carrying variant, create an instance, and print the data using a `match` statement.

```rust
enum Message {
    Quit,
    Write(String),
}

fn main() {
    let msg = Message::Write(String::from("Hello, Rust!"));
    match msg {
        Message::Quit => println!("Quit message"),
        Message::Write(text) => println!("Message: {}", text),
    }
}
```
