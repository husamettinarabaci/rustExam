## 📚 Section: Error Handling  
### 🔹 Category: Option Type  
#### ✅ Answer 52: Using the Option type for optional values

**Explanation:**
The `Option` type is used for values that may or may not be present. `Some` contains a value, `None` means no value.

```rust
fn find_even(n: i32) -> Option<i32> {
    if n % 2 == 0 {
        Some(n)
    } else {
        None
    }
}

fn main() {
    match find_even(4) {
        Some(num) => println!("Even: {}", num),
        None => println!("Odd number"),
    }
}
```
