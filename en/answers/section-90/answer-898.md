## 📘 Section: Domain-Specific Languages (DSLs) in Rust
### 🔹 Category: Writing a REPL loop for interacting with a mini DSL
#### ✅ Answer 898: Writing a REPL loop for interacting with a mini DSL

This solution provides a simple REPL loop in Rust that reads an arithmetic expression, tokenizes, parses, evaluates, and prints the result.

```rust
use std::io::{self, Write};

// Assume Token, AST, and tokenizer/parser functions as above.

fn main() {
    loop {
        print!("> ");
        io::stdout().flush().unwrap();
        let mut input = String::new();
        if io::stdin().read_line(&mut input).is_err() { break; }
        let tokens = tokenize(&input.trim());
        let (ast, _) = parse_expr(&tokens);
        let result = eval(&ast);
        println!("Result: {}", result);
    }
}
```
