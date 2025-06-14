## 📚 Section: Traits  
### 🔹 Category: Trait Objects  
#### ✅ Answer 95: Using trait objects

**Explanation:**
Trait objects enable dynamic dispatch. Store different types in a vector and call trait methods.

```rust
trait Animal {
    fn speak(&self);
}

struct Dog;
impl Animal for Dog {
    fn speak(&self) { println!("Woof!"); }
}
struct Cat;
impl Animal for Cat {
    fn speak(&self) { println!("Meow!"); }
}

fn main() {
    let animals: Vec<Box<dyn Animal>> = vec![Box::new(Dog), Box::new(Cat)];
    for a in animals {
        a.speak();
    }
}
```
