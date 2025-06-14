## 📘 Section: I/O Basics  
### 🔹 Category: File Input  
#### ✅ Answer 40: Reading input from a file

**Explanation:**

You can use `std::fs::read_to_string` to read the contents of a file.

```rust
use std::fs;

fn main() {
    let contents = fs::read_to_string("input.txt")
        .expect("Failed to read file");
    println!("File contents:\n{}", contents);
}
```
