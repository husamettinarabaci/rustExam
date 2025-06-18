## 📘 Section: Advanced Trait Design and Usage
### 🔹 Category: Trait Hierarchies and Supertraits
#### ✅ Answer 621: Creating trait hierarchies and supertraits

Trait hierarchies in Rust allow you to define relationships between traits using supertraits. A supertrait is a trait that must also be implemented when another trait is implemented. This enables code reuse and enforces certain behaviors across multiple traits. You specify a supertrait with a colon in the trait definition. For example, if `TraitB` is a supertrait of `TraitA`, then any type implementing `TraitA` must also implement `TraitB`.

```rust
trait Animal {
    fn speak(&self);
}

trait Pet: Animal {
    fn name(&self) -> &str;
}

struct Dog {
    pub name: String,
}

impl Animal for Dog {
    fn speak(&self) {
        println!("Woof!");
    }
}

impl Pet for Dog {
    fn name(&self) -> &str {
        &self.name
    }
}

fn main() {
    let dog = Dog { name: "Rex".to_string() };
    dog.speak();
    println!("Name: {}", dog.name());
}
```
