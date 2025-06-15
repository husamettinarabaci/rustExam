## 📘 Section: Option and Result Types  
### 🔹 Category: Option for Nullable Values  
#### ✅ Answer 181: Using `Option` for nullable values

The `Option` type is used in Rust to represent a value that may or may not be present. Here, `find_even` returns `Some(i32)` if an even number is found, or `None` otherwise. Pattern matching is used to handle the result.

```rust
fn find_even(nums: &[i32]) -> Option<i32> {
    for &n in nums {
        if n % 2 == 0 {
            return Some(n);
        }
    }
    None
}

fn main() {
    let numbers = [1, 3, 5, 8, 11];
    match find_even(&numbers) {
        Some(even) => println!("Found even number: {}", even),
        None => println!("No even number found"),
    }
}
```
