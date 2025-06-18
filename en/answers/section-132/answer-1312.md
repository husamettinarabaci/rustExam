## 📘 Section: Embedded DSLs: Parsing and Compilation
### 🔹 Category: Token Streams and Macro Input Handling
#### ✅ Answer 1312: Token streams and macro input handling

This example shows a function that processes a DSL input character by character and collects each character as a token in a vector.

```rust
fn tokenize_chars(input: &str) -> Vec<char> {
    input.chars().collect()
}

fn main() {
    let expr = "a+b";
    let tokens = tokenize_chars(expr);
    println!("{:?}", tokens); // ['a', '+', 'b']
}
```
