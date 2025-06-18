## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Writing a REPL loop for interacting with a mini DSL  
#### ✅ Answer 617: Writing a REPL loop for interacting with a mini DSL

This example shows a simple REPL loop that reads DSL expressions from the user and prints the result. For a real DSL, parser and evaluator functions would be implemented.

```rust
use std::io::{self, Write};

fn main() {
    loop {
        print!("> ");
        io::stdout().flush().unwrap();
        let mut input = String::new();
        if io::stdin().read_line(&mut input).is_err() {
            break;
        }
        let trimmed = input.trim();
        if trimmed == "exit" {
            break;
        }
        // Here, parser and evaluator functions would be called (for this example, just print input)
        println!("Input: {}", trimmed);
    }
}
```
