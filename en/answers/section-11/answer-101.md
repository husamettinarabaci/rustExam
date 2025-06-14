## 📚 Section: Macros  
### 🔹 Category: Macro Basics  
#### ✅ Answer 101: Defining a simple macro

**Explanation:**
Macros allow you to write code that writes other code. A simple macro can print a message.

```rust
macro_rules! say_hello {
    () => {
        println!("Hello, macro!");
    };
}

fn main() {
    say_hello!();
}
```
