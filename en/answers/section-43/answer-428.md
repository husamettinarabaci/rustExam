## 📘 Section: Enums and Data Modeling  
### 🔹 Category: Combining enums and pattern guards  
#### ✅ Answer 428: Combining enums and pattern guards

Pattern guards (`if` in match arms) let you add extra conditions when matching enum variants.

```rust
enum Number {
    Int(i32),
    Float(f64),
}

fn describe(num: Number) -> &'static str {
    match num {
        Number::Int(n) if n > 0 => "Positive integer",
        Number::Int(_) => "Other integer",
        Number::Float(f) if f > 0.0 => "Positive float",
        Number::Float(_) => "Other float",
    }
}
```
