## 📘 Section: Enums and Data Modeling  
### 🔹 Category: Using enums inside structs and vice versa  
#### ✅ Answer 426: Using enums inside structs and vice versa

Enums and structs can be used together. You can have a struct with an enum field, or an enum variant that contains a struct.

```rust
enum Command {
    Print(String),
    Move(Point),
}

struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let cmd = Command::Move(Point { x: 5, y: 10 });
}
```
