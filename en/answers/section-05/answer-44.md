# 📘 Section: Functions I  
## 🔹 Category: Trait Objects and Dynamic Dispatch  
### ✅ Answer 44: Using trait objects for polymorphism

**Explanation:**
Trait objects allow you to use dynamic dispatch to call methods on types that implement the same trait, enabling polymorphism.

**Example:**
```rust
trait Animal {
    fn speak(&self);
}

struct Dog;
impl Animal for Dog {
    fn speak(&self) { println!("Woof!"); }
}

struct Cat;
impl Animal for Cat {
    fn speak(&self) { println!("Meow!"); }
}

fn make_speak(animal: &dyn Animal) {
    animal.speak();
}

fn main() {
    let dog = Dog;
    let cat = Cat;
    make_speak(&dog);
    make_speak(&cat);
}
```
Here, both `Dog` and `Cat` implement `Animal`, and `make_speak` works with any type via a trait object.
