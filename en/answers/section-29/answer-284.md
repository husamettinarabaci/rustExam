## 📘 Section: Pattern Matching and Control Flow
### 🔹 Category: Pattern Matching on Option and Result Values
#### ✅ Answer 284: Pattern matching on Option and Result values

This solution demonstrates how to use `match` on both Option and Result types, printing a message for each variant.

```rust
fn main() {
    let maybe_num = Some(42);
    let result: Result<&str, &str> = Err("An error occurred");

    match maybe_num {
        Some(n) => println!("Option has value: {}", n),
        None => println!("Option is None"),
    }

    match result {
        Ok(msg) => println!("Result is Ok: {}", msg),
        Err(e) => println!("Result is Err: {}", e),
    }
}
```
