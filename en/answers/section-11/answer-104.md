## 📘 Section: Enums I  
### 🔹 Category: Enum Pattern Matching and Printing  
#### ✅ Answer 104: Using `match` with enums and printing

This example shows how to use a `match` statement with an enum to print different messages for each variant.

```rust
enum Command {
    Start,
    Stop(String),
}

fn main() {
    let cmd = Command::Stop(String::from("Emergency"));
    match cmd {
        Command::Start => println!("Starting..."),
        Command::Stop(reason) => println!("Stopped: {}", reason),
    }
}
```
