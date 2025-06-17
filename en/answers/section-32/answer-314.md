## 📘 Section: Traits and Trait Bounds  
### 🔹 Category: Using `where` Clauses  
#### ✅ Answer 314: Using `where` clauses for trait bounds

This example demonstrates how to use a `where` clause to specify multiple trait bounds in a generic function. We define two traits, `Speak` and `Run`, and implement both for a struct `Dog`. The `perform_actions` function requires its parameter to implement both traits, and the bounds are specified using a `where` clause for clarity and readability.

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

fn perform_actions<T>(animal: T)
where
    T: Speak + Run,
{
    animal.speak();
    animal.run();
}

fn main() {
    let dog = Dog;
    perform_actions(dog);
}
```
