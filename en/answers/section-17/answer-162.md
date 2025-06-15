## 📘 Section: Advanced Patterns  
### 🔹 Category: Pattern Guards  
#### ✅ Answer 162: Using pattern guards in match arms

Pattern guards in Rust allow you to add extra conditions to match arms using `if`. Here is an example:

```rust
enum Number {
    Value(i32),
    None,
}

fn main() {
    let num = Number::Value(7);

    match num {
        Number::Value(n) if n > 0 => println!("Positive: {}", n),
        Number::Value(n) if n < 0 => println!("Negative: {}", n),
        Number::Value(0) => println!("Zero"),
        Number::None => println!("No value"),
    }
}
```
