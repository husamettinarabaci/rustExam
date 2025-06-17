## 📘 Section: Pattern Matching and Control Flow  
### 🔹 Category: Enums and Pattern Matching  
#### ✅ Answer 282: Using `if let` and `while let` for concise pattern matching

This problem demonstrates concise pattern matching in Rust using `if let` and `while let`. `if let` is useful for checking a specific enum variant, while `while let` allows iteration over a collection until a certain pattern is no longer matched.

```rust
enum Item {
    Number(i32),
    Text(String),
    None,
}

fn main() {
    let value = Item::Number(42);
    if let Item::Number(n) = value {
        println!("Number: {}", n);
    }

    let items = vec![
        Item::Number(1),
        Item::Text("hello".to_string()),
        Item::Number(2),
        Item::None,
    ];
    let mut iter = items.into_iter();
    while let Some(Item::Number(n)) = iter.next() {
        println!("Found number: {}", n);
    }
}
```
