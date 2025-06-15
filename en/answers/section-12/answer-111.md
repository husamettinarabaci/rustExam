## 📘 Section: Enums II  
### 🔹 Category: Pattern Guards in Match Arms  
#### ✅ Answer 111: Pattern guards in match arms

**Explanation:**
Pattern guards allow you to add extra conditions to match arms. Here, we use a guard to check if the value inside the `Number::Value` variant is positive, negative, or zero.

```rust
enum Number {
    Value(i32),
}

fn main() {
    let num = Number::Value(-5);
    match num {
        Number::Value(n) if n > 0 => println!("Positive: {}", n),
        Number::Value(n) if n < 0 => println!("Negative: {}", n),
        Number::Value(0) => println!("Zero"),
        _ => (),
    }
}
```
