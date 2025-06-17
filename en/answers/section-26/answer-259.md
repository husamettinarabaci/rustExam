## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Flexible Ownership and Cow  
#### ✅ Answer 259: Using `Cow` (Copy on Write) to handle flexible ownership

This example demonstrates how to use `std::borrow::Cow` to write a function that works with both borrowed (`&str`) and owned (`String`) data. The function creates a copy only if necessary (e.g., to convert to uppercase).

```rust
use std::borrow::Cow;

fn to_uppercase<'a>(input: Cow<'a, str>) -> Cow<'a, str> {
    if input.chars().all(|c| c.is_uppercase()) {
        input
    } else {
        Cow::Owned(input.to_uppercase())
    }
}

fn main() {
    let borrowed: &str = "rust";
    let owned: String = String::from("Exam");

    let result1 = to_uppercase(Cow::Borrowed(borrowed));
    let result2 = to_uppercase(Cow::Owned(owned));

    println!("{}", result1);
    println!("{}", result2);
}
```
