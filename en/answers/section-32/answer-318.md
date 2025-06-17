## 📘 Section: Traits and Trait Bounds
### 🔹 Category: Trait Hierarchies and Supertraits
#### ✅ Answer 318: Creating trait hierarchies with supertraits

This question demonstrates how to use supertraits in Rust. The `Animal` trait is defined as a supertrait of `Speak`, meaning any type implementing `Animal` must also implement `Speak`. The `Dog` struct implements both traits, and both methods can be called on a `Dog` instance.

```rust
trait Speak {
    fn speak(&self);
}

trait Animal: Speak {
    fn describe(&self);
}

struct Dog;

impl Speak for Dog {
    fn speak(&self) {
        println!("Woof!");
    }
}

impl Animal for Dog {
    fn describe(&self) {
        println!("I am a dog.");
    }
}

fn main() {
    let dog = Dog;
    dog.speak();
    dog.describe();
}
```
