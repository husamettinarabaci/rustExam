## 📘 Section: Lifetimes I  
### 🔹 Category: Lifetime in Trait Objects  
#### ✅ Answer 80: Lifetime in trait objects

When a struct holds a reference to a trait object, you must specify a lifetime for the reference. Here is an example:

```rust
trait Greet {
    fn greet(&self) -> String;
}

struct Greeter<'a> {
    greeter: &'a dyn Greet,
}

struct Person;

impl Greet for Person {
    fn greet(&self) -> String {
        String::from("Hello from Person!")
    }
}

fn main() {
    let person = Person;
    let greeter = Greeter { greeter: &person };
    println!("{}", greeter.greeter.greet());
}
```
