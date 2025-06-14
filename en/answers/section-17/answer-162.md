## 📘 Section: Advanced Patterns  
### 🔹 Category: Pattern Guards  
#### ✅ Answer 162: Using pattern guards in match arms

Pattern guards in Rust allow you to add extra conditions to `match` arms. Here’s an example:

```rust
fn describe_number(n: i32) {
    match n {
        x if x == 0 => println!("Zero"),
        x if x > 0 && x % 2 == 0 => println!("Even and positive"),
        x if x > 0 && x % 2 != 0 => println!("Odd and positive"),
        x if x < 0 => println!("Negative"),
        _ => (),
    }
}
```

This function uses pattern guards (`if` conditions) to distinguish between even, odd, positive, negative, and zero values.
