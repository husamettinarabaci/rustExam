## 📘 Section: Generics I  
### 🔹 Category: Generic lifetime parameters  
#### ✅ Answer 218: Generic lifetime parameters

To use a generic lifetime parameter, annotate the function and its parameters with a lifetime. Here, `longest` returns a reference tied to the input lifetimes.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = "hello";
    let s2 = "world!";
    let result = longest(s1, s2);
    println!("The longest string is: {}", result);
}
```
This ensures the returned reference is valid as long as both input references are valid.
