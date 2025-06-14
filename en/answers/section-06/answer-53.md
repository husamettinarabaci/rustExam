## 📚 Section: Error Handling  
### 🔹 Category: Panic Macro  
#### ✅ Answer 53: Using the `panic!` macro

**Explanation:**
The `panic!` macro is used for unrecoverable errors. It stops the program and prints an error message.

```rust
fn check_positive(n: i32) {
    if n < 0 {
        panic!("Negative number: {}", n);
    }
}

fn main() {
    check_positive(5);
    check_positive(-3);
}
```
