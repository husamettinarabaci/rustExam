## 📘 Section: Enums II  
### 🔹 Category: Option and Enum Matching  
#### ✅ Answer 115: Matching on Option

This example demonstrates how to use pattern matching with the `Option` enum in Rust. By matching on `Some` and `None`, you can safely handle optional values and avoid errors from unwrapping.

```rust
fn main() {
    let maybe_number: Option<i32> = Some(10);
    match maybe_number {
        Some(value) => println!("The value is {}", value),
        None => println!("No value found"),
    }
}
```
