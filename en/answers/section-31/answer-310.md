## 📘 Section: Enums, Variants, and Algebraic Data Types  
### 🔹 Category: Pattern Matching with Guards and Bindings
#### ✅ Answer 310: Pattern-matching enums with guards and bindings

In Rust, you can use pattern guards and `@` bindings in match arms to write flexible and expressive code. The example below demonstrates matching on an enum with both a guard and an `@` binding.

```rust
enum Message {
    Number(i32),
    Quit,
}

fn process_message(msg: Message) {
    match msg {
        n @ Message::Number(val) if val > 0 => {
            println!("Positive number: {:?}", n);
        }
        Message::Number(val) if val < 0 => {
            println!("Negative number: {}", val);
        }
        Message::Quit => {
            println!("Received quit message");
        }
        _ => {
            println!("Zero or unknown message");
        }
    }
}

fn main() {
    process_message(Message::Number(42));
    process_message(Message::Number(-7));
    process_message(Message::Quit);
}
```

Here, `n @ Message::Number(val) if val > 0` uses both an `@` binding and a guard, allowing you to capture the whole enum value and apply a condition at the same time.
