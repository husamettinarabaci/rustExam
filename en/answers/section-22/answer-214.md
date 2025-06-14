## 📘 Section: Traits I  
### 🔹 Category: Trait Methods  
#### ✅ Answer 214: Calling trait methods

Trait methods can be called directly on types that implement the trait, or via trait objects for dynamic dispatch.

```rust
trait Greet {
    fn greet(&self);
}

struct Person;
impl Greet for Person {
    fn greet(&self) { println!("Hello!"); }
}

let p = Person;
p.greet(); // Direct call

let g: Box<dyn Greet> = Box::new(Person);
g.greet(); // Via trait object
```
