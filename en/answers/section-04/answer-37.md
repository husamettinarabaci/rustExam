## 📘 Section: I/O Basics  
### 🔹 Category: Terminal Input  
#### ✅ Answer 37: Reading input with a prompt

**Explanation:**

You can print a prompt before reading input to guide the user.

```rust
use std::io;

fn main() {
    let mut input = String::new();
    print!("Please enter your name: ");
    use std::io::Write;
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    println!("Hello, {}!", input.trim());
}
```
