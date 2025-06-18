## 📘 Section: Compiler Internals and Language Design  
### 🔹 Category: Rust's parser and lexer  
#### ✅ Answer 961: Exploring Rust’s parser and lexer

In the Rust compiler, the lexer breaks source code into meaningful tokens, such as keywords, identifiers, operators, and literals. The parser then takes these tokens and builds an abstract syntax tree (AST) according to Rust’s grammar.

For example, the statement `let x = 5 + 3;` is tokenized as:
- `let` (keyword)
- `x` (identifier)
- `=` (assignment operator)
- `5` (number)
- `+` (operator)
- `3` (number)
- `;` (semicolon)

The parser uses these tokens to construct an AST representing a variable assignment expression.
