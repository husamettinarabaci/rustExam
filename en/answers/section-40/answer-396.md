## 📘 Section: Working with Strings and Text
### 🔹 Category: String Building
#### ✅ Answer 396: Building strings with `format!` and `push_str`

`format!` creates a new `String` from formatted input, while `push_str` appends to an existing `String`. Use `push_str` for incremental building.

```rust
fn main() {
    let name = "Rust";
    let s1 = format!("Hello, {}!", name);
    let mut s2 = String::from("Hello");
    s2.push_str(", ");
    s2.push_str(name);
    s2.push('!');
    println!("format!: {}", s1);
    println!("push_str: {}", s2);
}
```
