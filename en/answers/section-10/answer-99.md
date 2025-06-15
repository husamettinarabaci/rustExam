## 📘 Section: Structs II  
### 🔹 Category: Methods and Lifetimes  
#### ✅ Answer 99: Method with lifetimes

This example shows how to use explicit lifetime annotations in a method. The struct `TextHolder` holds a string slice reference, and the method `get_text` returns a reference with the same lifetime. Lifetime annotations ensure the returned reference is valid as long as the struct exists.

```rust
struct TextHolder<'a> {
    text: &'a str,
}

impl<'a> TextHolder<'a> {
    fn get_text(&self) -> &'a str {
        self.text
    }
}

fn main() {
    let s = String::from("hello");
    let holder = TextHolder { text: &s };
    println!("{}", holder.get_text());
}
```
