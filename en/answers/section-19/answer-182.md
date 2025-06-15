## 📘 Section: Option and Result Types  
### 🔹 Category: Unwrapping and Matching on Option  
#### ✅ Answer 182: Unwrapping and matching on `Option`

You can handle `Option` values in Rust using pattern matching or methods like `unwrap_or`. Here, `get_first` returns the first element as an `Option<i32>`, and both approaches are demonstrated.

```rust
fn get_first(nums: &[i32]) -> Option<i32> {
    nums.get(0).copied()
}

fn main() {
    let numbers = [10, 20, 30];
    // Using match
    match get_first(&numbers) {
        Some(val) => println!("First: {}", val),
        None => println!("No elements"),
    }
    // Using unwrap_or
    let first = get_first(&numbers).unwrap_or(-1);
    println!("First (with default): {}", first);
}
```
