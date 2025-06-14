## 📚 Section: Traits  
### 🔹 Category: Blanket Implementations  
#### ✅ Answer 99: Blanket implementations

**Explanation:**
Blanket implementations allow you to implement a trait for all types that satisfy a trait bound.

```rust
trait MyTrait {
    fn hello(&self);
}

impl<T: ToString> MyTrait for T {
    fn hello(&self) {
        println!("{}", self.to_string());
    }
}

fn main() {
    42.hello();
    "hi".hello();
}
```
