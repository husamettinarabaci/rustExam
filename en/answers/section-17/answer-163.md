## 📘 Section: Advanced Patterns  
### 🔹 Category: Ranges and Bindings  
#### ✅ Answer 163: Matching on ranges and bindings

You can use range patterns and variable bindings in Rust `match` arms to handle different value intervals. Example:

```rust
fn describe_range(n: i32) {
    match n {
        1..=10 => println!("Low"),
        11..=100 => println!("Medium"),
        x if x > 100 => println!("High"),
        _ => println!("Zero or negative"),
    }
}
```

This function matches on ranges and uses a binding for values greater than 100.
