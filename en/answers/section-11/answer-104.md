## 📚 Section: Macros  
### 🔹 Category: Repetition in Macros  
#### ✅ Answer 104: Macro repetition

**Explanation:**
Macros can use repetition to accept and process multiple arguments.

```rust
macro_rules! print_all {
    ($($x:expr),*) => {
        $(println!("{}", $x);)*
    };
}

fn main() {
    print_all!(1, 2, 3, "hi");
}
```
