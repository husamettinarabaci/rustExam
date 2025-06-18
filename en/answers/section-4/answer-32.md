## 📘 Section: I/O Basics  
### 🔹 Category: Parsing Input  
#### ✅ Answer 32: Parsing user input to a number

**Explanation:**

You can use `.trim().parse::<i32>()` to convert a string input to an integer in Rust.

```rust
use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter a number:");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let num: i32 = input.trim().parse().expect("Invalid number");
    println!("You entered: {}", num);
}
```
