## 📘 Section: Traits and Trait Bounds  
### 🔹 Category: Default Method Implementations  
#### ✅ Answer 315: Default method implementations in traits

This example shows how to provide a default method implementation in a trait and how to override it for a specific struct. The `Speak` trait defines a default `speak` method. For the `Dog` struct, the trait is implemented without overriding the method, so the default is used. For the `Cat` struct, the method is overridden with a custom implementation. This demonstrates the difference between using the default and providing a custom override.

```rust
trait Speak {
    fn speak(&self) {
        println!("(Default) Animal is speaking.");
    }
}

struct Dog;
struct Cat;

impl Speak for Dog {}

impl Speak for Cat {
    fn speak(&self) {
        println!("Meow!");
    }
}

fn main() {
    let dog = Dog;
    let cat = Cat;
    dog.speak(); // Uses default method
    cat.speak(); // Uses overridden method
}
```
