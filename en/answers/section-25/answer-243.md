## 📘 Section: Closures and Ownership  
### 🔹 Category: Mutating captured variables in closures  
#### ✅ Answer 243: Mutating Captured Variables in Closures

This solution demonstrates how a closure can mutate a captured variable. The closure must be declared as `mut` and will borrow the variable mutably.

```rust
fn main() {
    let mut value = 0;
    let mut increment = || {
        value += 1;
        println!("Value inside closure: {}", value);
    };

    increment(); // prints 1
    increment(); // prints 2
    println!("Value after closure calls: {}", value); // prints 2
}
```
