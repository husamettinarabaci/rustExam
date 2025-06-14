## 📘 Section: Closures and Ownership  
### 🔹 Category: Closures and Error Handling  
#### ✅ Answer 249: Closures and error handling

Closures can return `Result` types for error handling.

```rust
let parse = |s: &str| s.parse::<i32>();
let res = parse("42");
if let Ok(n) = res {
    println!("Parsed: {}", n);
}
```

Closures can propagate errors using the `?` operator inside functions.
