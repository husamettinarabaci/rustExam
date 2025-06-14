## 📘 Section: Traits I  
### 🔹 Category: Using Generics with Traits  
#### ✅ Answer 213: Using trait objects

A trait object allows for dynamic dispatch in Rust, enabling polymorphism. You can use `Box<dyn Trait>` to store different types that implement the same trait.

```rust
trait Animal {
    fn speak(&self);
}

struct Dog;
impl Animal for Dog {
    fn speak(&self) { println!("Woof!"); }
}

let animal: Box<dyn Animal> = Box::new(Dog);
animal.speak();
```
