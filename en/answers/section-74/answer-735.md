## 📘 Section: Trait Objects and VTable Mechanics
### 🔹 Category: Downcasting Trait Objects
#### ✅ Answer 735: Downcasting trait objects using `Any` and `TypeId`

You can use the `Any` trait to downcast a trait object to its concrete type. The trait must be `'static` and object-safe. Use `downcast_ref` or `downcast_mut` to attempt the cast.

```rust
use std::any::Any;

trait Animal: Any {
    fn speak(&self);
    fn as_any(&self) -> &dyn Any;
}

struct Dog;
impl Animal for Dog {
    fn speak(&self) { println!("Woof!"); }
    fn as_any(&self) -> &dyn Any { self }
}

fn try_downcast(animal: &dyn Animal) {
    if let Some(dog) = animal.as_any().downcast_ref::<Dog>() {
        println!("It's a dog!");
        dog.speak();
    } else {
        println!("Not a dog.");
    }
}

fn main() {
    let dog = Dog;
    try_downcast(&dog);
}
```
