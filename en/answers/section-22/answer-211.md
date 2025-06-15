## 📘 Section: Generics I  
### 🔹 Category: Generic Functions  
#### ✅ Answer 211: Generic functions

Generic functions allow you to write code that works with many types. In this example, the function `print_value` is generic over type `T` and uses a trait bound to require `T: std::fmt::Display`. This allows the function to print any value that implements `Display`.

```rust
fn print_value<T: std::fmt::Display>(value: T) {
    println!("{}", value);
}

fn main() {
    print_value(42);         // i32
    print_value("hello");   // &str
    print_value(3.14);       // f64
}
```
