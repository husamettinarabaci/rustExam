## 📘 Section: I/O Basics  
### 🔹 Category: Parsing Input  
#### ✅ Answer 38: Reading and parsing a float

**Explanation:**

You can use `.trim().parse::<f64>()` to parse a string input to a floating-point number.

```rust
use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter a floating-point number:");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let num: f64 = input.trim().parse().expect("Invalid float");
    println!("You entered: {}", num);
}
```
