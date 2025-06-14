## 📚 Section: Generics  
### 🔹 Category: Generic Functions  
#### ✅ Answer 71: Writing a generic function

**Explanation:**
Generic functions allow you to write code that works with any type. Trait bounds restrict which types are allowed.

```rust
use std::fmt::Debug;

fn print_item<T: Debug>(item: T) {
    println!("{:?}", item);
}

fn main() {
    print_item(42);
    print_item("hello");
}
```
