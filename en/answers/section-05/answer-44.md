## 📘 Section: Functions I  
### 🔹 Category: Function Return Types  
#### ✅ Answer 44: Function returning nothing (`()`)

In Rust, a function that does not return a value has the unit type `()` as its return type. This is the default if no return type is specified. Such functions are often used for side effects, like printing to the terminal.

```rust
fn print_message() {
    println!("No return value!");
}

fn main() {
    print_message();
}
```
