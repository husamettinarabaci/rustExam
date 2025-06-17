## 📘 Section: Traits and Trait Bounds  
### 🔹 Category: Implementing Traits for External Types  
#### ✅ Answer 316: Implementing a trait for an external type

In Rust, you can implement your own trait for a type from the standard library (like `String`). This example defines a `Shout` trait and implements it for `String`. The trait method converts the string to uppercase and adds an exclamation mark.

```rust
trait Shout {
    fn shout(&self) -> String;
}

impl Shout for String {
    fn shout(&self) -> String {
        format!("{}!", self.to_uppercase())
    }
}

fn main() {
    let s = String::from("hello rust");
    println!("{}", s.shout());
}
```
