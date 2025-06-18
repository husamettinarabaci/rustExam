## 📘 Section: I/O Basics  
### 🔹 Category: Input Processing  
#### ✅ Answer 34: Trimming whitespace from input

**Explanation:**

The `.trim()` method removes leading and trailing whitespace from a string.

```rust
use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter text with spaces:");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    println!("Trimmed: '{}'", input.trim());
}
```
