## 📚 Section: Modules and Visibility  
### 🔹 Category: Use Keyword  
#### ✅ Answer 84: Using the `use` keyword

**Explanation:**
The `use` keyword brings items into scope, making them easier to access.

```rust
mod mymod {
    pub fn greet() {
        println!("Hello!");
    }
}

use mymod::greet;

fn main() {
    greet();
}
```
