## 📘 Section: Advanced Patterns  
### 🔹 Category: Ignoring Values  
#### ✅ Answer 164: Ignoring values with `_` in patterns

You can use `_` in Rust patterns to ignore values you don't care about. Example:

```rust
fn print_tuple(t: (i32, i32, i32)) {
    match t {
        (0, _, _) => println!("First is zero"),
        (first, _, third) => println!("First: {}, Third: {}", first, third),
    }
}
```

This function ignores the second value in the tuple and demonstrates how to use `_` in patterns.
