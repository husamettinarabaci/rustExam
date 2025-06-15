## 📘 Section: Enums I  
### 🔹 Category: Option Enum Usage  
#### ✅ Answer 106: Option enum usage

The `Option` enum is used in Rust to represent a value that can be either present (`Some`) or absent (`None`). This is useful for cases where a value might not exist, instead of using nulls. In this example, we use `Option<i32>` to indicate whether a number is even (present) or odd (absent).

```rust
fn check_even(number: i32) -> Option<i32> {
    if number % 2 == 0 {
        Some(number)
    } else {
        None
    }
}

fn main() {
    let num = 7;
    match check_even(num) {
        Some(n) => println!("{} is even!", n),
        None => println!("{} is odd!", num),
    }
}
```
