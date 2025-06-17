## 📘 Section: File I/O and the Filesystem  
### 🔹 Category: Graceful I/O Error Handling  
#### ✅ Answer 410: Gracefully handling I/O errors with Result

This question teaches you how to handle file operation errors using `Result`. A meaningful message is displayed to the user in case of an error.

```rust
use std::fs::File;

fn main() {
    match File::open("notfound.txt") {
        Ok(_) => println!("File opened."),
        Err(e) => println!("Could not open file: {}", e),
    }
}
```
