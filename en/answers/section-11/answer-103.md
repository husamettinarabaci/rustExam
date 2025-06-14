## 📚 Section: Macros  
### 🔹 Category: Macro Pattern Matching  
#### ✅ Answer 103: Macro pattern matching

**Explanation:**
Macros can match different patterns and expand accordingly.

```rust
macro_rules! my_macro {
    ($x:expr) => {
        println!("Number: {}", $x);
    };
    ($x:literal) => {
        println!("String: {}", $x);
    };
}

fn main() {
    my_macro!(42);
    my_macro!("hello");
}
```
