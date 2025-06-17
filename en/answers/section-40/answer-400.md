## 📘 Section: Working with Strings and Text
### 🔹 Category: Borrowed or Owned String Data
#### ✅ Answer 400: Using `Cow<str>` for borrowed or owned string data

`Cow<str>` allows you to return either a borrowed or owned string. This is useful when you want to avoid allocations unless necessary.

```rust
use std::borrow::Cow;

fn add_prefix<'a>(s: &'a str) -> Cow<'a, str> {
    if s.starts_with("prefix_") {
        Cow::Borrowed(s)
    } else {
        Cow::Owned(format!("prefix_{}", s))
    }
}

fn main() {
    let s1 = "prefix_hello";
    let s2 = "world";
    let r1 = add_prefix(s1);
    let r2 = add_prefix(s2);
    println!("{} (is_borrowed: {})", r1, matches!(r1, Cow::Borrowed(_)));
    println!("{} (is_borrowed: {})", r2, matches!(r2, Cow::Borrowed(_)));
}
```
