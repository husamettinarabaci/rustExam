## 📘 Section: Closures and Ownership  
### 🔹 Category: Closure capture by reference  
#### ✅ Answer 241: Closure Capture by Reference

This solution demonstrates how a closure can capture variables by reference. The closure borrows the variable, so changes to the variable are reflected when the closure is called again.

```rust
fn main() {
    let mut value = 10;
    let print_value = || println!("Value: {}", value);

    print_value(); // prints 10
    value = 20;
    print_value(); // prints 20
}
```
