## 📘 Section: Traits and Trait Bounds  
### 🔹 Category: Generic Functions with Trait Bounds  
#### ✅ Answer 312: Adding trait bounds to generic functions

This question demonstrates how to write a generic function with a trait bound. The `Speak` trait is defined and implemented for a struct. The generic function accepts any type that implements `Speak` and calls its `speak` method.

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

fn make_speak<T: Speak>(item: T) {
    item.speak();
}

fn main() {
    let dog = Dog;
    make_speak(dog);
}
```
