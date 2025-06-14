## 📘 Section: I/O Basics  
### 🔹 Category: Terminal Input  
#### ✅ Answer 31: Reading a line from terminal input

**Explanation:**

You can use `std::io::stdin().read_line()` to read input from the terminal in Rust.

```rust
use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter a line:");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    println!("You entered: {}", input.trim());
}
```
