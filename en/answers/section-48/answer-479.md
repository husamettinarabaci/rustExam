## 📘 Section: CLI Applications with Clap  
### 🔹 Category: User-Friendly Error Messages  
#### ✅ Answer 479: Creating user-friendly error messages

This example shows how to display user-friendly error messages for missing or invalid arguments. `clap` automatically generates descriptive errors, but you can also add custom messages.

```rust
use clap::{App, Arg};

fn main() {
    let app = App::new("ErrorCLI")
        .arg(Arg::with_name("file").required(true).help("File to process"));

    let matches = app.get_matches_safe();
    match matches {
        Ok(m) => {
            let file = m.value_of("file").unwrap();
            println!("File: {}", file);
        }
        Err(e) => {
            eprintln!("Error: {}", e.message);
        }
    }
}
```
