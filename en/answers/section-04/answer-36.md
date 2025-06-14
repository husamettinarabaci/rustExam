## 📘 Section: I/O Basics  
### 🔹 Category: Input Processing  
#### ✅ Answer 36: Reading until EOF

**Explanation:**

You can use a loop with `io::stdin().read_line()` to read until EOF.

```rust
use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    for line in stdin.lock().lines() {
        match line {
            Ok(l) => println!("Line: {}", l),
            Err(_) => break,
        }
    }
}
```
