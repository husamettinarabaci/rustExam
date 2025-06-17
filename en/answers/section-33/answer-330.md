## 📘 Section: Error Handling with Result and Option  
### 🔹 Category: Error Handling and Combinators  
#### ✅ Answer 330: Logging or reporting errors without panicking

In this example, instead of panicking when an operation fails, the program reports the error to the user in a meaningful way. The `Result` type is used for error handling, and on error, the message is printed using `eprintln!`.

```rust
use std::fs::File;

fn open_file(filename: &str) -> Result<File, std::io::Error> {
    File::open(filename)
}

fn main() {
    match open_file("not_exists.txt") {
        Ok(_file) => println!("File opened successfully!"),
        Err(e) => eprintln!("Failed to open file: {}", e),
    }
    println!("Program continues running.");
}
```
