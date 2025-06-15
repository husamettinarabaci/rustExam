## 📘 Section: Closures and Ownership
### 🔹 Category: Closures and Error Handling
#### ✅ Answer 249: Closures and error handling

In Rust, closures can return `Result` types for error handling. You can use combinators like `map` and `and_then` to work with the result. Here is an example:

```rust
fn main() {
    let parse_number = |s: &str| s.parse::<i32>();

    let result = parse_number("42");
    match result {
        Ok(n) => println!("Parsed: {}", n),
        Err(e) => println!("Error: {}", e),
    }

    // Using combinators
    let doubled = parse_number("21").map(|n| n * 2);
    println!("Doubled: {:?}", doubled); // Output: Doubled: Ok(42)
}
```

This closure attempts to parse a string as an integer and returns a `Result<i32, _>`. The example shows both direct error handling and using combinators like `map`.
