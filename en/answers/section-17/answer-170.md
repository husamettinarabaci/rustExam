## 📘 Section: Advanced Patterns  
### 🔹 Category: Matching on References and Dereferencing  
#### ✅ Answer 170: Matching on references and dereferencing in patterns

You can match on references and use dereferencing in Rust patterns. Example:

```rust
fn describe_ref(n: &i32) {
    match n {
        &0 => println!("Zero"),
        &x if x > 0 => println!("Positive"),
        &x if x < 0 => println!("Negative"),
    }
}
```

This function demonstrates matching on a reference and using dereferencing in the pattern.
