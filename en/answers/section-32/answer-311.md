## 📘 Section: Traits and Trait Bounds  
### 🔹 Category: Declaring and Implementing Traits  
#### ✅ Answer 311: Declaring and implementing a custom trait

This question demonstrates how to define and implement a trait in Rust. Traits specify shared behavior. Here, the `Speak` trait is defined and implemented for the `Dog` struct. The `speak` method for `Dog` prints `Woof woof!` to the terminal.

```rust
trait Speak {
    fn speak(&self);
}

struct Dog;

impl Speak for Dog {
    fn speak(&self) {
        println!("Woof woof!");
    }
}

fn main() {
    let dog = Dog;
    dog.speak();
}
```
