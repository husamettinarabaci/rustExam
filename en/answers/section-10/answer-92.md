## 📚 Section: Traits  
### 🔹 Category: Default Methods  
#### ✅ Answer 92: Default methods in traits

**Explanation:**
Traits can provide default method implementations, which can be overridden.

```rust
trait Greet {
    fn hello(&self) {
        println!("Hello!");
    }
}

struct Person;
impl Greet for Person {
    fn hello(&self) {
        println!("Hi!");
    }
}

struct Robot;
impl Greet for Robot {}

fn main() {
    Person.hello();
    Robot.hello();
}
```
