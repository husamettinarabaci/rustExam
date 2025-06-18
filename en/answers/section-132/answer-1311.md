## 📘 Section: Embedded DSLs: Parsing and Compilation
### 🔹 Category: DSL Parsers
#### ✅ Answer 1311: Writing a parser for DSL syntax

This example shows a simple parser function that splits a DSL expression by whitespace and collects the tokens into a vector.

```rust
fn parse_dsl(input: &str) -> Vec<&str> {
    input.split_whitespace().collect()
}

fn main() {
    let expr = "add 1 2";
    let tokens = parse_dsl(expr);
    println!("{:?}", tokens); // ["add", "1", "2"]
}
```
