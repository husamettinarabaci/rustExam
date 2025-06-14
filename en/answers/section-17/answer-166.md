## 📘 Section: Advanced Patterns  
### 🔹 Category: Using `@` Bindings  
#### ✅ Answer 166: Using `@` bindings in patterns

You can use `@` bindings in Rust patterns to both test a value and bind it to a variable. Example:

```rust
fn describe_age(age: i32) {
    match age {
        teen @ 13..=19 => println!("Teenager: {}", teen),
        child @ 0..=12 => println!("Child: {}", child),
        adult @ 20..=i32::MAX => println!("Adult: {}", adult),
        negative => println!("Negative age: {}", negative),
    }
}
```

This function uses `@` bindings to capture and print the matched value in each arm.
