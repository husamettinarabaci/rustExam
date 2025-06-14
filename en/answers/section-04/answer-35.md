## 📘 Section: I/O Basics  
### 🔹 Category: Input Processing  
#### ✅ Answer 35: Reading a single character from input

**Explanation:**

You can read a line and take the first character using `.chars().next()`.

```rust
use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter a single character:");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    if let Some(ch) = input.trim().chars().next() {
        println!("You entered: {}", ch);
    } else {
        println!("No character entered.");
    }
}
```
