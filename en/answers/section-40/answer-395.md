## 📘 Section: Working with Strings and Text
### 🔹 Category: String Concatenation and Formatting
#### ✅ Answer 395: Concatenating and formatting strings

The `+` operator concatenates a `String` and a `&str`, while `format!` creates a new formatted string. `format!` is more flexible for combining multiple values.

```rust
fn main() {
    let s1 = String::from("Hello");
    let s2 = " world";
    let concat = s1.clone() + s2;
    let formatted = format!("{}{}!", s1, s2);
    println!("Concatenated: {}", concat);
    println!("Formatted: {}", formatted);
}
```
