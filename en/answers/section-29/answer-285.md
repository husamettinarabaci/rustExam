## 📘 Section: Pattern Matching and Control Flow
### 🔹 Category: Using Guards in Match Statements
#### ✅ Answer 285: Using guards in match statements (`if` in `match`)

This solution uses guards in match arms to add extra conditions during pattern matching.

```rust
fn main() {
    let num = 7;

    match num {
        n if n > 0 && n < 10 => println!("Number is between 0 and 10: {}", n),
        n if n >= 10 => println!("Number is 10 or greater: {}", n),
        _ => println!("Number is zero or negative"),
    }
}
```
