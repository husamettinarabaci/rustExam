## 📘 Section: Advanced Pattern Matching
### 🔹 Category: Using `@` bindings in match arms
#### ✅ Answer 389: Using `@` bindings in match arms

This problem demonstrates how to use `@` bindings in match arms to both match a pattern and bind the value for use.

```rust
enum Message {
    Number(i32),
    Text(String),
}

fn main() {
    let msg = Message::Number(42);
    match msg {
        n @ Message::Number(10..=100) => println!("Matched number in range: {:?}", n),
        Message::Number(n) => println!("Other number: {}", n),
        Message::Text(s) => println!("Text: {}", s),
    }
}
```
