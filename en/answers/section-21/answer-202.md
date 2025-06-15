## 📘 Section: Traits I  
### 🔹 Category: Default Methods in Traits  
#### ✅ Answer 202: Default methods in traits

In Rust, traits can provide default method implementations. Types that implement the trait can use the default or override it with their own implementation. This allows for flexible and reusable code.

```rust
trait Greet {
    fn hello(&self) {
        println!("Hello from the default trait method!");
    }
}

struct Person;
struct Robot;

impl Greet for Person {
    // Uses the default hello()
}

impl Greet for Robot {
    fn hello(&self) {
        println!("Beep boop! I am a robot.");
    }
}

fn main() {
    let alice = Person;
    let r2d2 = Robot;
    alice.hello(); // Uses default
    r2d2.hello();  // Uses overridden
}
```
