## 📘 Section: I/O Basics  
### 🔹 Category: Input Processing  
#### ✅ Answer 36: Reading until EOF

**Explanation:**

You can use a loop with `io::stdin().read_line()` to read until EOF.

```rust
use std::io::{self, Write};

fn main() {
    let mut buffer = String::new();
    let stdin = io::stdin();

    loop {
        buffer.clear();
        let bytes = stdin.read_line(&mut buffer).unwrap();

        if bytes == 0 {
            // EOF reached
            break;
        }

        print!("Line: {}", buffer);
        io::stdout().flush().unwrap(); // Ensure immediate output
    }
}

```
