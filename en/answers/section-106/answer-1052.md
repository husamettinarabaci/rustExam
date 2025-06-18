## 📘 Section: Async Error Handling
### 🔹 Category: Async Error Handling
#### ✅ Answer 1052: Using `Result` with `async`/`await`

This example demonstrates an async function returning a `Result`, and how to handle the result with `await`.

```rust
async fn try_parse(num: &str) -> Result<i32, std::num::ParseIntError> {
    num.parse::<i32>()
}

#[tokio::main]
async fn main() {
    match try_parse("42").await {
        Ok(n) => println!("Parsed: {}", n),
        Err(e) => println!("Parse error: {}", e),
    }
}
```
