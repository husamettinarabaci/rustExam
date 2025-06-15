## 📘 Section: Error Handling
### 🔹 Category: Handling errors in main
#### ✅ Answer 196: Handling errors in the main function

In Rust, the `main` function can return a `Result`, allowing you to use the `?` operator for error propagation. This makes error handling in command-line applications more ergonomic. If an error is returned from `main`, Rust will print it to the standard error output.

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_file() -> io::Result<String> {
    let mut file = File::open("test.txt")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

fn main() -> io::Result<()> {
    match read_file() {
        Ok(data) => {
            println!("File contents: {}", data);
            Ok(())
        },
        Err(e) => {
            eprintln!("Error: {}", e);
            Err(e)
        }
    }
}
```
