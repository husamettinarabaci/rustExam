## 📘 Section: Embedded Domain-Specific Languages (DSLs)
### 🔹 Category: Interactive DSLs
#### ✅ Answer 1267: Writing REPLs for interactive DSLs

A REPL allows users to enter and evaluate DSL expressions interactively. Example for arithmetic expressions:

```rust
use std::io::{self, Write};

fn eval(expr: &str) -> Result<i32, &'static str> {
    // For demo: only supports single integer
    expr.trim().parse().map_err(|_| "Parse error")
}

fn main() {
    loop {
        print!("> ");
        io::stdout().flush().unwrap();
        let mut input = String::new();
        if io::stdin().read_line(&mut input).is_err() { break; }
        match eval(&input) {
            Ok(val) => println!("= {}", val),
            Err(e) => println!("Error: {}", e),
        }
    }
}
```

This is a minimal REPL; a real DSL would require a parser.
