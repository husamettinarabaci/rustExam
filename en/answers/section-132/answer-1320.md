## 📘 Section: Embedded DSLs: Parsing and Compilation
### 🔹 Category: Extending DSLs with User-Defined Constructs
#### ✅ Answer 1320: Extending DSLs with user-defined constructs

This example adds a new "sub" command to the DSL and handles both the standard and new command.

```rust
fn eval(tokens: &[&str]) -> Option<i32> {
    match tokens {
        ["add", a, b] => Some(a.parse::<i32>().ok()? + b.parse::<i32>().ok()?),
        ["sub", a, b] => Some(a.parse::<i32>().ok()? - b.parse::<i32>().ok()?),
        _ => None,
    }
}

fn main() {
    let add_tokens = vec!["add", "5", "3"];
    let sub_tokens = vec!["sub", "5", "3"];
    println!("add: {:?}", eval(&add_tokens)); // add: Some(8)
    println!("sub: {:?}", eval(&sub_tokens)); // sub: Some(2)
}
```
