## 📘 Section: Lifetimes I  
### 🔹 Category: Lifetime in Function Return Values  
#### ✅ Answer 76: Lifetime in function return values

When a function returns a reference to data from its input, you must specify a lifetime parameter to ensure the returned reference is valid. Here, the function returns the first word of a string slice.

```rust
fn first_word<'a>(s: &'a str) -> &'a str {
    match s.find(' ') {
        Some(idx) => &s[..idx],
        None => s,
    }
}

fn main() {
    let text = String::from("hello world");
    let word = first_word(&text);
    println!("First word: {}", word);
}
```
