## 📘 Section: Enums I  
### 🔹 Category: Enum Basics  
#### ✅ Answer 101: Defining a basic enum

This example shows how to define a basic enum in Rust, create an instance, and print its value using a `match` statement.

```rust
enum Direction {
    Up,
    Down,
}

fn main() {
    let dir = Direction::Up;
    match dir {
        Direction::Up => println!("Going up!"),
        Direction::Down => println!("Going down!"),
    }
}
```
