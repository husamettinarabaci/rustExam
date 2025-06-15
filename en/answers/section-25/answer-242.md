## 📘 Section: Closures and Ownership  
### 🔹 Category: Closure capture by value (`move`)  
#### ✅ Answer 242: Closure Capture by Value (`move`)

This solution demonstrates how a closure can capture variables by value using the `move` keyword. The closure owns its captured value, so changes to the original variable do not affect the closure.

```rust
fn main() {
    let mut value = 10;
    let print_value = move || println!("Value: {}", value);

    value = 20;
    print_value(); // prints 10
}
```
