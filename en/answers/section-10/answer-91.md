## 📚 Section: Traits  
### 🔹 Category: Defining Traits  
#### ✅ Answer 91: Defining a trait

**Explanation:**
Traits define shared behavior. Implement the trait for a struct and call its method.

```rust
trait Speak {
    fn speak(&self);
}

struct Dog;
impl Speak for Dog {
    fn speak(&self) {
        println!("Woof!");
    }
}

fn main() {
    let d = Dog;
    d.speak();
}
```
