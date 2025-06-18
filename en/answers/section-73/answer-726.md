## 📘 Section: Advanced Trait System and Coherence  
### 🔹 Category: Blanket Implementations and Trait Resolution  
#### ✅ Answer 726: Using blanket implementations and controlling trait resolution

A blanket implementation applies a trait to all types that satisfy certain bounds. If a more specific implementation exists, Rust will use the most specific one. If both a blanket and a specific implementation could apply, the specific one takes precedence.

```rust
trait Greet {
    fn greet(&self);
}

impl<T> Greet for T {
    fn greet(&self) {
        println!("Hello from blanket impl!");
    }
}

struct Person;

impl Greet for Person {
    fn greet(&self) {
        println!("Hello from Person!");
    }
}

fn main() {
    let x = 5;
    x.greet(); // Uses blanket impl
    let p = Person;
    p.greet(); // Uses specific impl
}
```

Here, `Person` gets its own implementation, so Rust uses it instead of the blanket one.
