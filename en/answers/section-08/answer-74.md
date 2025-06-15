## 📘 Section: Lifetimes I  
### 🔹 Category: Structs and Lifetimes  
#### ✅ Answer 74: Structs with lifetime parameters

When a struct contains a reference, you must specify a lifetime parameter to ensure the reference is valid as long as the struct exists. Here, the struct `TextHolder` holds a string slice reference, and the lifetime `'a` ensures the reference is valid.

```rust
struct TextHolder<'a> {
    text: &'a str,
}

fn main() {
    let s = String::from("Hello, lifetime!");
    let holder = TextHolder { text: &s };
    println!("{}", holder.text);
}
```
