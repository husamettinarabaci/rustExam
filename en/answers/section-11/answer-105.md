## 📚 Section: Macros  
### 🔹 Category: Macro Hygiene  
#### ✅ Answer 105: Macro hygiene

**Explanation:**
Macro hygiene ensures variables defined inside a macro do not conflict with those outside.

```rust
macro_rules! make_var {
    () => {
        let x = 5;
        println!("Inside macro: {}", x);
    };
}

fn main() {
    let x = 10;
    make_var!();
    println!("Outside macro: {}", x);
}
```
