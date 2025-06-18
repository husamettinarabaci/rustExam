## 📘 Section: Embedded DSLs: Parsing and Compilation
### 🔹 Category: DSL Tooling and Editor Integration
#### ✅ Answer 1318: DSL tooling and editor integration

This example shows a simple syntax highlighting function that prints DSL keywords and numbers in different colors (for terminal display).

```rust
fn highlight_dsl(input: &str) {
    for token in input.split_whitespace() {
        if token == "add" || token == "mul" {
            print!("\x1b[32m{}\x1b[0m ", token); // green
        } else if token.chars().all(|c| c.is_digit(10)) {
            print!("\x1b[34m{}\x1b[0m ", token); // blue
        } else {
            print!("{} ", token);
        }
    }
    println!();
}

fn main() {
    highlight_dsl("add 1 2");
}
```
