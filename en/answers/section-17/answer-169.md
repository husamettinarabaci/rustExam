## 📘 Section: Advanced Patterns  
### 🔹 Category: Multiple Patterns with `|`  
#### ✅ Answer 169: Using multiple patterns with `|`

You can use the `|` operator in Rust patterns to match multiple values. Example:

```rust
fn describe_char(c: char) {
    match c {
        'a' | 'e' | 'i' | 'o' | 'u' => println!("Vowel"),
        '0'..='9' => println!("Digit"),
        _ => println!("Other"),
    }
}
```

This function demonstrates how to match multiple patterns using `|` and ranges.
