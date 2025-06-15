## 📘 Section: Advanced Patterns  
### 🔹 Category: Matching on Ranges and Bindings  
#### ✅ Answer 163: Matching on ranges and bindings

This example shows how to use pattern matching with ranges and variable bindings in Rust. The `match` statement can match integer values against ranges, and you can bind the matched value to a variable using the `@` syntax. This is useful for handling different cases based on value intervals.

```rust
fn main() {
    let value = 7;
    match value {
        n @ 1..=5 => println!("{} is in the range 1 to 5", n),
        n @ 6..=10 => println!("{} is in the range 6 to 10", n),
        n => println!("{} is outside the specified ranges", n),
    }
}
```
