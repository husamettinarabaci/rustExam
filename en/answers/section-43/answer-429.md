## 📘 Section: Enums and Data Modeling  
### 🔹 Category: Using enums to represent CLI commands or messages  
#### ✅ Answer 429: Using enums to represent CLI commands or messages

Enums are useful for modeling commands or messages in CLI applications. Each command is represented as an enum variant.

```rust
enum Command {
    Add(String),
    Remove(String),
    List,
}

fn execute(cmd: Command) {
    match cmd {
        Command::Add(item) => println!("Added: {}", item),
        Command::Remove(item) => println!("Removed: {}", item),
        Command::List => println!("List"),
    }
}
```
