## 📘 Section: Generics II  
### 🔹 Category: Generic functions with lifetimes  
#### ✅ Answer 224: Writing a generic function with lifetime parameters

This example shows how to combine generic type parameters, trait bounds, and explicit lifetime parameters in a function. The function `longest_with_announcement` takes two string slices with the same lifetime and a generic parameter `T` that implements `Display`. It prints the announcement and returns the longer string slice.

```rust
use std::fmt::Display;

fn longest_with_announcement<'a, T>(x: &'a str, y: &'a str, ann: T) -> &'a str
where
    T: Display,
{
    println!("Announcement: {}", ann);
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = "long string";
    let s2 = "short";
    let result = longest_with_announcement(s1, s2, "Comparing lengths");
    println!("Longest: {}", result);
}
```
