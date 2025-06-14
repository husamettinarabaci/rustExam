## 📚 Section: Macros  
### 🔹 Category: Macro Arguments  
#### ✅ Answer 102: Macro with arguments

**Explanation:**
Macros can take arguments and use them in their expansion.

```rust
macro_rules! print_twice {
    ($x:expr) => {
        println!("{}", $x);
        println!("{}", $x);
    };
}

fn main() {
    print_twice!("Hello");
}
```
