## 📘 Section: Traits and Trait Bounds  
### 🔹 Category: Multiple Trait Bounds  
#### ✅ Answer 313: Using multiple trait bounds in a generic function

This example demonstrates how to use multiple trait bounds in a generic function. We define two traits, `Speak` and `Run`, and implement both for a struct `Dog`. The generic function `perform_actions` requires its parameter to implement both traits, allowing it to call both `speak` and `run` methods. This is a common pattern for enforcing multiple capabilities on generic types in Rust.

```rust
trait Speak {
    fn speak(&self);
}

trait Run {
    fn run(&self);
}

struct Dog;

impl Speak for Dog {
    fn speak(&self) {
        println!("Woof!");
    }
}

impl Run for Dog {
    fn run(&self) {
        println!("The dog is running.");
    }
}

fn perform_actions<T: Speak + Run>(animal: T) {
    animal.speak();
    animal.run();
}

fn main() {
    let dog = Dog;
    perform_actions(dog);
}
```
