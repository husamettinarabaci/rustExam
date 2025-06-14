## 📘 Section: Error Handling and Result Types  
### 🔹 Category: Error Handling in Main  
#### ✅ Answer 180: Handling errors in the main function

You can use `Result` as the return type of `main` to propagate errors. This allows you to use the `?` operator in `main`.

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let content = std::fs::read_to_string("file.txt")?;
    println!("{}", content);
    Ok(())
}
```
