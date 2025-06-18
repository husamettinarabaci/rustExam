## 📘 Section: Trait Objects and VTable Mechanics  
### 🔹 Category: Trait Objects and Method Calls  
#### ✅ Answer 733: Implementing and calling methods through trait objects

Trait objects enable dynamic method calls on different types that implement the same trait. By storing `Box<dyn Trait>` in a collection, you can call trait methods on each element, regardless of its concrete type.

```rust
trait Animal {
    fn speak(&self) -> String;
}

struct Dog;
struct Cat;

impl Animal for Dog {
    fn speak(&self) -> String {
        "Woof!".to_string()
    }
}

impl Animal for Cat {
    fn speak(&self) -> String {
        "Meow!".to_string()
    }
}

fn main() {
    let animals: Vec<Box<dyn Animal>> = vec![Box::new(Dog), Box::new(Cat)];
    for animal in animals {
        println!("{}", animal.speak());
    }
}
```
