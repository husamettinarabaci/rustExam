## 📚 Section: Generics  
### 🔹 Category: Generic Constraints  
#### ✅ Answer 79: Adding generic constraints

**Explanation:**
You can require multiple trait bounds for a generic type using `+`.

```rust
use std::fmt::Debug;

fn print_and_clone<T: Debug + Clone>(item: T) {
    println!("{:?}", item.clone());
}

fn main() {
    print_and_clone(5);
}
```
