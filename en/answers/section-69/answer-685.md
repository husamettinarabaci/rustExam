## 📘 Section: Macro Rules and Declarative Macros  
### 🔹 Category: Recursive macros and complex pattern matching  
#### ✅ Answer 685: Recursive macros and complex pattern matching

This problem demonstrates a recursive macro in Rust that processes multiple arguments. The macro handles each argument separately and uses recursion to cover all.

```rust
macro_rules! count {
    () => {0};
    ($_head:expr $(, $tail:expr)*) => {1 + count!($($tail),*)};
}

fn main() {
    let n = count!(1, 2, 3, 4);
    println!("Total arguments: {}", n);
}
```
The macro recursively counts the number of arguments provided.
