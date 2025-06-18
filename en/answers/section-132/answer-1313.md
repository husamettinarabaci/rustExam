## 📘 Section: Embedded DSLs: Parsing and Compilation
### 🔹 Category: Recursive Descent Parsers
#### ✅ Answer 1313: Implementing recursive descent parsers

This example shows a simple recursive function that parses addition and multiplication. For a real parser, a more advanced approach is needed.

```rust
fn eval(expr: &str) -> i32 {
    if let Some(idx) = expr.find('+') {
        let (left, right) = expr.split_at(idx);
        return eval(left) + eval(&right[1..]);
    }
    if let Some(idx) = expr.find('*') {
        let (left, right) = expr.split_at(idx);
        return eval(left) * eval(&right[1..]);
    }
    expr.trim().parse().unwrap_or(0)
}

fn main() {
    let expr = "2+3*4";
    println!("{}", eval(expr)); // 14
}
```
