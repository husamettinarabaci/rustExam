## 📘 Section: Functions II  
### 🔹 Category: Early Return in Functions  
#### ✅ Answer 59: Function with early return

This function demonstrates how to use the `return` keyword for an early exit. If the input is negative, the function returns immediately. Otherwise, it prints the value.

```rust
fn print_if_positive(n: i32) {
    if n < 0 {
        println!("Negative value, returning early.");
        return;
    }
    println!("Value: {}", n);
}

fn main() {
    print_if_positive(5);   // prints: Value: 5
    print_if_positive(-3);  // prints: Negative value, returning early.
}
```
