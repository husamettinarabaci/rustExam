## 📘 Section: Domain-Specific Languages (DSLs) in Rust  
### 🔹 Category: Tokenizing a custom DSL input into structured tokens  
#### ✅ Answer 892: Tokenizing a custom DSL input into structured tokens

To tokenize a DSL input, split the text and model each part with an enum.

```rust
enum Token {
    Number(i32),
    Plus,
    Minus,
}

fn tokenize(input: &str) -> Vec<Token> {
    input.split_whitespace().map(|w| match w {
        "+" => Token::Plus,
        "-" => Token::Minus,
        n => Token::Number(n.parse().unwrap()),
    }).collect()
}

fn main() {
    let tokens = tokenize("3 + 4 - 2");
    // tokens: [Number(3), Plus, Number(4), Minus, Number(2)]
}
```

This example splits the DSL input into tokens and models them with an enum.
